import { FooterComponent } from "../../components";
// Core modules imports are same as usual
import { Pagination } from 'swiper';

// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { US } from 'country-flag-icons/string/3x2'
import { HR } from 'country-flag-icons/string/3x2'

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import './quiz.scss';
import { QuizData } from "./quiz-data";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BASE_URL } from './../../components/';

export default () => {
  const { t, i18n } = useTranslation();
  let [language, setLanguage] = useState<string>('en');
  const [swiper, setSwiper] = useState<any>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const quizData = QuizData;

  useEffect(() => {
    setIsEnd(answers.length >= 5 ? true : false);
  }, [answers]);

  const createMarkup = (flagKey: string) => {
    return {__html: flagKey === 'HR' ? HR : US};
  }

  const changeLanguage = (languageCode: string) => {
    setLanguage(languageCode);
    i18n.changeLanguage(languageCode);
  }

  const selectAnswer = (answer: any) => {
    setAnswers((arr: any) => [...arr, answer?.value]);
    swiper.slideNext();
  }

  const getTotal = () => {
    return answers.reduce((prev, curr) => prev + curr);
  }

  return (
    <>
      <section className="quiz">
        <div className="container">
          {/* <NavigationComponent isPrivacyPage={false} /> */}
          <h2 className="quiz__title">
            <img className="quiz__logo" src={`${BASE_URL}/assets/images/iwi-logo-white.svg`} alt="iwi white logo" />
            { t('quiz') }
          </h2>
          <div className="row">
            <div className="col">
              <h2 className="quiz__subtitle">{ t('language') }</h2>
              <div className="quiz__language-row">
                <div className="quiz__language-flag" onClick={() => changeLanguage('hr')} dangerouslySetInnerHTML={createMarkup('HR')}></div>
                <div className="quiz__language-flag" onClick={() => changeLanguage('en')} dangerouslySetInnerHTML={createMarkup('US')}></div>
              </div>
            </div>
          </div>
          {!isEnd && (
            <div className="row quiz">
              <Swiper
                allowTouchMove={false}
                slidesPerView={1}
                onSwiper={(swiper: any) => setSwiper(swiper)}
              >
                {quizData?.map((data: any) => (
                  <SwiperSlide key={data?.id} className="quiz__slide">
                    <h3 className="quiz__question">
                      { data[`${language}Question`] }
                    </h3>
                    <div className="quiz__answers">
                      {data?.answers.map((answer: any) => (
                        <button className="quiz__answer" key={answer?.id} onClick={() => selectAnswer(answer)}>
                          <span className="quiz__answer-text">
                            { answer[`${language}Text`] }
                          </span>
                        </button>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          {isEnd && (
            <div className="row quiz__score-row">
              <div className="col">
                <h2 className="quiz__subtitle">{ t('yourScore') }:</h2>
                <div className="quiz__score">
                  { getTotal() }
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <FooterComponent />
    </>
  );
};
