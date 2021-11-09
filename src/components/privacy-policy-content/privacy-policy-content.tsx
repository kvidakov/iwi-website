import React from 'react';
import { Link } from '@mui/material';
import { BASE_URL } from '../../components';

export const PrivacyPolicyContentComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img className="privacy-policy__logo" src={`${BASE_URL}/assets/images/iwi-logo-white.svg`} alt="iwi white logo" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="privacy-policy__title"><span className="privacy-policy__title--highlighted">iwi</span> Privacy Statement</h1>
          <p className="privacy-policy__hint">(further in text: „Statement“ or „Privacy Statement“)</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">I. Data Processing Manager</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              IWI SOFTWARE d.o.o. with its registered office in Zagreb, Avenija Dubrovnik 15,
              (hereinafter: the “Company” or the “Processing Manager”) collects and processes certain
              personal data from you in accordance with this Privacy Statement.
            </li>
            <li className="privacy-policy__text">
              The privacy policy applies to all personal data of users that we collect and process..
            </li>
            <li className="privacy-policy__text">
              Personal data is any data which is related to a natural person whose identity has
              been established or can be established, directly or indirectly.
            </li>
            <li className="privacy-policy__text">
              Data processing is any action performed on personal data, such as the collection,
              storage, use, insight and transfer of personal data.
            </li>
            <li className="privacy-policy__text">
              This Statement does not apply to anonymous data. Anonymous data is data that
              cannot be linked to a specific individual.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">II. General information</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              With the privacy statement, the Company, in order to ensure fair and transparent
              processing, wants to provide respondents with clear information about the processing
              and protection of their personal data and enable them to easily monitor and manage
              their personal data
            </li>
            <li className="privacy-policy__text">
              The Company is committed to the protection of privacy and personal data.
            </li>
            <li className="privacy-policy__text">
              If you have any questions regarding the protection of personal data, please contact
              us at <a href="mailto:info@iwi-app.com">info@iwi-app.com</a>.
            </li>
            <li className="privacy-policy__text">
              We reserve the right to change this Privacy Statement at any time, for any reason.
              Respondents will be notified of any changes to this Privacy Statement at www.iwi-
              app.com or through the associated linked application ("Site").
            </li>
            <li className="privacy-policy__text">
              We may occasionally remind you of the Privacy Statement by e-mail, while the
              website and the associated application always contain a valid version of the Privacy
              Statement.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">III. Principles of personal data processing</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              The controller processes the personal data of the visitor or registered user of the Site
              (hereinafter: "Respondent") based on the following principles of personal data
              protection:
            </li>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__list-item">
                legality, fairness and transparency – when processing personal data,
                Company acts in accordance with the law and provides the Respondent with
                easily accessible and understandable information and communication related to
                the processing of personal data;
              </li>
              <li className="privacy-policy__list-item">
                limited purpose – Company collects and processes personal data only for a
                specific and lawful purpose and does not further process them in a manner that
                is not in accordance with the purpose for which they were collected;
              </li>
              <li className="privacy-policy__list-item">
                reduction of the amount of data – Company uses only those data of
                Respondents that are appropriate and necessary to achieve a certain legitimate
                purpose;
              </li>
              <li className="privacy-policy__list-item">
                accuracy of personal data - in order to ensure fair and transparent processing
                of personal data and to prevent possible misuse, personal data must be
                accurate, complete and up-to-date. It is extremely important to us that the
                Respondent notifies the Processing Manager of any change in his / her personal
                data immediately or as soon as possible;
              </li>
              <li className="privacy-policy__list-item">
                restriction of data storage - Company stores personal data of Respondents for
                as long as necessary to perform a certain purpose and then deletes them from
                all records, ie applies anonymization and / or pseudonymization in relation to
                them;
              </li>
              <li className="privacy-policy__list-item">
                integrity and confidentiality - Company processes personal data in a secure
                manner, including protection against unauthorized or unlawful processing and
                against accidental loss, destruction or damage (eg. access to personal data of
                Respondents is only authorized by those authorized to perform their work).
              </li>
            </ul>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">IV. Basics of data processing</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              Personal data may be processed provided that:
            </li>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__list-item">
                you have agreed to processing (consent);
              </li>
              <li className="privacy-policy__list-item">
                it is necessary for concluding or executing a contract;
              </li>
              <li className="privacy-policy__list-item">
                it is necessary for the purpose of fulfilling legal obligations;
              </li>
              <li className="privacy-policy__list-item">
                it is necessary for the purpose of the legitimate interests of IWI SOFTWARE
                d.o.o. measured in relation to your rights regarding the protection of personal
                data;
              </li>
              <li className="privacy-policy__list-item">
                it is necessary for legal purposes.
              </li>
            </ul>
            <li className="privacy-policy__text">
              There may be uses that are permitted on other grounds. In that case, we will
              recognize the legal basis and let you know of it as soon as possible.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">V. Processed personal data and use of personal data</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              The Processing Manager shall collect only those personal data that are necessary to
              achieve a certain lawful purpose of processing.
            </li>
            <li className="privacy-policy__text">
              Personal data collected and processed by the Processing Manager in relation to the
              Respondent include:
            </li>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__list-item">
                personal data for identification: name and surname, date of birth, Personal
                identification number;
              </li>
              <li className="privacy-policy__list-item">
                if the Respondent conducts business activity through the website: data on the
                legal entity through which it performs business activity (company name, address,
                information whether it is in the VAT system or not, Personal identification number;
                if it is a legal entity outside the European Union then also their tax number )
              </li>
              <li className="privacy-policy__list-item">
                contact details: email address of the respondent and mobile phone number of the respondent;
              </li>
              <li className="privacy-policy__list-item">
                user data: username and password;
              </li>
              <li className="privacy-policy__list-item">
                data on activities on the Page: data on the date of profile creation on the Page, on
                the last activity on the Page and on the current activity on the Page;
              </li>
              <li className="privacy-policy__list-item">
                data on transactions made through the Site (name, surname, address, amount
                and time of the transaction);
              </li>
              <li className="privacy-policy__list-item">
                technical data (number of your visits to our site, or your receipt and use of
                materials and communications that we send to you electronically, IP address)
                collected through cookies or otherwise;
              </li>
              <li className="privacy-policy__list-item">
                and other information that the Respondent may provide to the Processing
                Manager (eg. by publishing his / her content on the Site).
              </li>
            </ul>
            <li className="privacy-policy__text">
              The Processing Manager does not process specific categories of personal data of
              Respondents that reveal racial or ethnic origin, political opinions, religious or
              philosophical beliefs or trade union membership, genetic data, biometric data, health-
              related data or data on sexual life or sexual orientation, individual or personal data
              relating to criminal convictions and criminal offenses.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">VI. How do we collect your personal data</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              The Company collects the personal data of the Respondents in various ways, among
              others, in the following ways:
            </li>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__list-item">
                when Respondents register on the Site;
              </li>
              <li className="privacy-policy__list-item">
                by completing our surveys or applying to one of our competitions;
              </li>
              <li className="privacy-policy__list-item">
                while managing your membership rights;
              </li>
              <li className="privacy-policy__list-item">
                when you provide us with information in the form of publishing content on our
                website, or during your direct communication with the Company, including
                personal communication with the Company's staff and online communication via
                the Company's application, the Company's website, e-mail, etc.;
              </li>
              <li className="privacy-policy__list-item">
                from the third parties (including for example Facebook and other social networks)..
              </li>
            </ul>
            <li className="privacy-policy__text">
              Depending on the types of activities, some of the requested information are defined
              as mandatory and some as voluntary. If you do not provide mandatory information for
              the activity that requires it, you will not be allowed to engage in that activity.
            </li>
            <li className="privacy-policy__text">
              Help us update your information by notifying us of any changes to your contact
              information or preferences.
            </li>
            <li className="privacy-policy__text">
              If you provide information on behalf of another person, you must ensure that that
              person is aware of these privacy policies before you do so. If you are under the age
              of 16, please do not provide us with any information without the approval of a parent
              or legal guardian.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">VII. Purpose and period of storage of personal data</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              When the Processing Manager collects and processes personal data, he shall do so in order to:
            </li>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__list-item">
                to offer the Company's services on the market, including sending publications and
                event details to our respondents;
              </li>
              <li className="privacy-policy__list-item">
                to improve the Company's services, measure your satisfaction with the
                Company's services and conduct competitions;
              </li>
              <li className="privacy-policy__list-item">
                to manage relations with respondents;
              </li>
              <li className="privacy-policy__list-item">
                to analyze and administer the site, including monitoring the use of the site;
              </li>
              <li className="privacy-policy__list-item">
                to make available the information you requested;
              </li>
              <li className="privacy-policy__list-item">
                to fulfill its legal obligations based on accounting and bookkeeping regulations;
              </li>
              <li className="privacy-policy__list-item">
                and to fulfill any of its other legal obligations;
              </li>
            </ul>
            <li className="privacy-policy__text">
              and all on the basis of Article IV of these Statement.
            </li>
            <li className="privacy-policy__text">
              We store and process personal data only for as long as it is necessary for the
              execution of a certain legitimate purpose, unless the applicable regulations provide
              for a longer period of storage for a particular purpose. In the case of giving consent
              for marketing, we keep the data as long as the consent is not withdrawn. In the case
              of rejected bids, where no consent has been given for marketing, we keep the data
              related to the bid for one year, and in case you ask us to delete them, they will be
              deleted immediately.
            </li>
            <li className="privacy-policy__text">
              Personal data that are no longer needed shall either be irreversibly anonymised or
              destroyed in a secure manner.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">VIII. Marketing, development and improvement of the Company's services</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              Personal data submitted to the Processing Manager by the Respondent during user
              registration may be used by the Processing Manager to find out:
            </li>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__list-item">
                whether you read e-mails or other materials of the Company, including the
                newsletter, either by downloading attachments in e-mails or by opening links;
              </li>
              <li className="privacy-policy__list-item">
                whether you open web links, unsubscribe links or links to events included in the
                Company's e-mails and marketing materials;
              </li>
              <li className="privacy-policy__list-item">
                whether and how you visit the site after opening the links provided to you by the
                Company. We do this by using software that places cookies on your device that
                track this activity and record it. Please check the Cookie Usage Notice, for more
                information on how to manage and remove cookies;
                <br />
                We also use the stated data on respondents to send marketing messages,
                newsletters, e-mail notifications about the Company's services, if you have given
                your consent. If you no longer wish to receive the above marketing messages,
                newsletters, e-mail notifications about the Company's services or surveys to
                measure satisfaction with the Company's services, you can unsubscribe at any
                time by sending an e-mail to: <a href="mailto:info@iwi-app.com">info@iwi-app.com</a>;
              </li>
              <li className="privacy-policy__list-item">
                your IP address information is used by the Processing Manager to improve its services.
              </li>
            </ul>
            <li className="privacy-policy__text">
              When the Company organizes prize competitions for the purpose of its promotion, it
              may request from you some personal data defined by the rules of the competition.
            </li>
            <li className="privacy-policy__text">
              If you’re filling out surveys by which the Company measures the satisfaction of users
              of the Company's services, it will collect from you some personal data defined by the
              survey.
            </li>
            <li className="privacy-policy__text">
              Personal data that are no longer needed shall either be irreversibly anonymised or
              destroyed in a secure manner.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">IX. People with whom the Processing Manager shares your personal information</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              The Company may share your personal information with the video subscriber, video
              maker and third parties in accordance with its contractual obligations. This represents
              the legitimate interest of the Processing Manager. Third parties include, but are not
              limited to:
            </li>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__list-item">
                expert advisors and auditors,
              </li>
              <li className="privacy-policy__list-item">
                suppliers hired by the Company to perform services in the name and on behalf of
                the Company, including IT service providers, event organizers; and
              </li>
              <li className="privacy-policy__list-item">
                other persons hired by the Company to provide you with services including courier
                services, lawyers, experts and translators.
              </li>
            </ul>
            <li className="privacy-policy__text">
              The controller may also share personal data with supervisory authorities, courts or
              government agencies when such sharing is necessary, including in order to comply
              with all legal requirements. Unless prohibited by law, we will use all reasonable efforts
              to have the Company notify you in advance of such disclosure of your personal
              information.
            </li>
            <li className="privacy-policy__text">
              The Company does not allow your personal data to be made available to third parties
              for the purpose of offering products and services of third parties, unless you have
              given your express consent for that purpose.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">X. Protection of your personal data</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              In accordance with applicable laws on personal data protection, Company uses
              technical and organizational measures to protect personal data from unauthorized
              access, use, disclosure or destruction. The Respondent can access the personal data
              on the site using a password, e-mail address and username. Respondent's password
              is encrypted. It is recommended that the Respondent does not reveal the password to
              anyone. In addition, the Respondents' personal identification data is stored on a
              server that can be accessed only by selected persons and service providers. The
              Company encrypts certain sensitive information to ensure that Respondents ’personal
              information is secure. You are obliged to take care of the security of your password
              and change it from time to time.
            </li>
            <li className="privacy-policy__text">
              In order to protect the personal data of users and their privacy, Company implements
              appropriate physical, technical and organizational protection measures. Said
              maintenance and safety testing is carried out on an ongoing basis. Company restricts
              access to user data in such a way that access to them has only authorized persons
              who work directly on the provision or maintenance of the service, and on improving
              the quality and payment of the service. In addition, Company continuously instructs
              its staff on the importance of confidentiality and the maintenance of privacy and
              security of personal data, and we engage partners with whom we contract
              appropriate protection measures.
            </li>
            <li className="privacy-policy__text">
              Unfortunately, no data transmission over the Internet, or any wireless network can be
              100% secure and the Company cannot guarantee the protection of any information
              transmitted to, or from the Site and is not responsible for the actions of any third party
              to whom such data becomes available.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">XI. Respondents rights</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              Filing a complaint: The Processing Manager strives to ensure the highest standards
              in the processing of personal data and takes a serious approach to resolving any
              complaints of respondents. If you believe that the processing of personal data carried
              out by the Head of Processing is contrary to the regulations on personal data
              protection, please notify us in writing to the address of the Head of Processing or via
              e-mail address: <a href="mailto:info@iwi-app.com">info@iwi-app.com</a>. You can also send your complaint to the
              supervisory body - the Agency for Personal Data Protection, Zagreb, Martićeva 14,
              and from 25 May 2018 to the supervisory body within the EU.
            </li>
            <li className="privacy-policy__text">
              Right of access: Each respondent has the right to request details about the personal
              data that the Processing Manager processes in relation to him / her and the way in
              which he / she processes them.
            </li>
            <li className="privacy-policy__text">
              Right to Correction: If the Processing Manager processes your personal data in a
              way that is incomplete or inaccurate, you may at any time request the Processing
              Manager to correct or supplement it. Please notify us in the event of any changes to
              your personal information by e-mail: <a href="mailto:info@iwi-app.com">info@iwi-app.com</a>, in order to update your
              information.
            </li>
            <li className="privacy-policy__text">
              The right to restrict processing: You can ask the Processing Manager to restrict
              the processing of your data:
            </li>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__list-item">
                if you dispute the accuracy of the processing data during a period that allows the
                Processing Manager to verify the accuracy of that data;
              </li>
              <li className="privacy-policy__list-item">
                if the data processing was illegal, but you refuse to delete it and instead request a
                data processing restriction;
              </li>
              <li className="privacy-policy__list-item">
                if the data are no longer needed for the intended purposes, but are still needed to
                meet legal requirements; or
              </li>
              <li className="privacy-policy__list-item">
                if you have complained about the processing of this data.
              </li>
            </ul>
            <li className="privacy-policy__text">
              The right to the possibility of data transfer: You can ask the Processing Manager
              to provide you with the data entrusted to him in a structured form, in the usual
              machine-readable format:
            </li>
            <ul className="privacy-policy__list">
              <li className="privacy-policy__list-item">
                if it processes this data on the basis of consent given and which you can revoke
                or for the purpose of executing the contract, and
              </li>
              <li className="privacy-policy__list-item">
                if processing is performed using automated processes.
              </li>
            </ul>
            <li className="privacy-policy__text">
              In a certain circumstances, each respondent also has the right to request the
              cessation of any unauthorized transfer of his personal data to third parties and to
              require that the controller does not transfer personal data relating to him to third
              parties.
            </li>
            <li className="privacy-policy__text">
              Exercise of rights: If you wish to exercise any of the above rights, please contact us
              using our contact details provided in this Statement.
            </li>
            <li className="privacy-policy__text">
              Confirmation of identity: In case of doubt, we may request additional information to
              verify your identity. It serves to protect your rights and your private sphere.
            </li>
            <li className="privacy-policy__text">
              Abuse of rights: If you use any of these rights too often and with the obvious
              intention of the abuse, Processing Manager may refuse to process your request.
            </li>
            <li className="privacy-policy__text">
              When you object to the processing of your personal data by the Processing Manager
              or when you withdraw your previously given consent, there is a possibility that the

              Company will not be able to achieve the processing purposes stated in this Privacy
              Statement or that you will not be able to use our services. Withdrawal of consent
              does not affect the lawfulness of processing based on consent before it is withdrawn.
            </li>
            <li className="privacy-policy__text">
              When you object to the processing of your personal data by the Processing Manager
              or when you withdraw your previously given consent, it is important that you
              understand how the Company may continue to process your personal data to the
              extent required or otherwise permitted by the law.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">XII. Consequences of non-disclosure of personal data and management of consents</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              User registration is not possible if the Respondent does not want to provide his
              personal data, such as e-mail, and specify a username and password. Without
              registration a certain number of site services are not available.
            </li>
            <li className="privacy-policy__text">
              In the event of non-consent or subsequent withdrawal of consent to receive our
              marketing notices, you will not receive our marketing messages, newsletters, e-mail
              notifications about the Company's services or surveys sent by the Company to
              improve services.
            </li>
            <li className="privacy-policy__text">
              You may revoke the consent given to the Processing Manager for a particular
              processing purpose at any time, in which case we will no longer use your personal
              data collected on the basis of the consent for the stated purposes.
            </li>
            <li className="privacy-policy__text">
              You can change your consent via the website or by sending an e-mail to the e-mail
              address <a href="mailto:info@iwi-app.com">info@iwi-app.com</a>.
            </li>
            <li className="privacy-policy__text">
              If you wish to give your consent again, you may do so via the website or by sending
              an e-mail to the following e-mail address: <a href="mailto:info@iwi-app.com">info@iwi-app.com</a>.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">XIII. Confidentiality of the third-party data</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              This Privacy Statement applies only to the use and utilization of data collected by the
              Processing Manager from the respondents. Other websites that can be accessed
              through the Site have their own statements of confidentiality and data collection and
              the ways in which they are used and published. If you visit one or more other sites
              through the Site, we recommend that you review the privacy statement of that site.
              The Company is not responsible for the ways and conditions of work of the third
              parties.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="privacy-policy__subtitle">XIV. Notice on the use of cookies</h2>
          <ol className="privacy-policy__ordered-list">
            <li className="privacy-policy__text">
              We inform you that the Company uses cookies on its website.
            </li>
            <li className="privacy-policy__text">
              Cookies are text files that are stored on the computer of a site visitor. We use cookies
              in order to ensure the operation of all functions of the Internet portal that are

              necessary for the normal functioning of the site and without which it is not possible to
              access the site. Such cookies cannot be turned off or deleted because without them
              the site would not function properly. However, these cookies do not store any
              personal data, but only the technical data necessary for the proper operation of the
              site.
            </li>
            <li className="privacy-policy__text">
              In addition to the listed cookies necessary for the operation of the site, the Company
              also uses cookies that enable user identification when revisiting the site in order to
              customize certain content specifically for you and to analyze the site on which we use
              analysis software to analyze site usage. In this way, the Company acquires valuable
              knowledge about the needs of its customers, with the aim of improving the quality of
              its offer.
            </li>
            <li className="privacy-policy__text">
              Said analysis software, in addition, collects and stores some technical data, including
              the user's IP address.
            </li>
            <li className="privacy-policy__text">
              Furthermore, the site may contain third-party cookies (such as google analytics,
              Facebook, etc.) as well as advertising cookies and similar links, which may also
              collect certain personal information about you. These cookies are not set or controlled
              by the Company. For more information on how a third party uses cookies and how
              you can manage them, please visit the relevant third party websites.
            </li>
            <li className="privacy-policy__text">
              Analytical cookies, third-party cookies, advertising cookies and similar cookies may
              be stored on your computer only with your express consent. You can otherwise turn
              off or delete such cookies through the appropriate settings on the browser.
            </li>
            <li className="privacy-policy__text">
              You can manage cookies by selecting settings in the menu. You can always withdraw
              your consent to the use of cookies in the same way, by selecting settings in the menu.
            </li>
            <li className="privacy-policy__text">
              Most internet browsers accept cookies, but you can usually change your browser
              settings to reject new cookies, disable existing ones, or simply notify you when new
              cookies are sent to your device.
            </li>
            <li className="privacy-policy__text">
              To set your browser to reject cookies, see the browser provider's help instructions
              (which are normally found under the "Help", "Tools" or "Edit" menus.
            </li>
            <li className="privacy-policy__text">
              Please note that certain functionality of the site may be lost if you refuse or disable
              cookies. In addition, disabling a cookie or cookie category does not delete the cookie
              from your browser. You have to do it yourself in the browser menu.
            </li>
            <li className="privacy-policy__text">
              We do not share your personal information collected through cookies with third
              parties without your express consent.
            </li>
            <li className="privacy-policy__text">
              The rights of the respondents and other information in relation to the personal data
              collected about you by cookies can be found in the Privacy Statement.
            </li>
            <li className="privacy-policy__text">
              If you have any questions regarding this notice, please contact us at <a href="mailto:info@iwi-app.com">info@iwi-app.com</a>.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span className="privacy-policy__back-to-homepage-wrapper">
            <Link href="/">
              <img className="privacy-policy__back-to-homepage" src={`${BASE_URL}/assets/images/back-to-homepage.svg`} alt="back to homepage" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};