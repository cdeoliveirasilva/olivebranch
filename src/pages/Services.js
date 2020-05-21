import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { BrowserRouter as Router } from "react-router-dom";
import translate from "../assets/images/translate.svg";
import translation from "../assets/images/translation.svg";
import subtitles2 from "../assets/images/subtitles2.svg";

function Services(props) {
  return (
    <div>
      <Router>
        <Hero className="/" title="Services" />

        <Content className="translation">
          <img src={translate} className="icons" alt="/" />
          <h1 className="header2">Translation</h1>
          <p>
            Translation entails much more than translating a text word for word.
            A good translation requires not only the mastery of the target
            language and a good knowledge of the different dialects,
            punctuation, grammar, axioms, slang, variants, styles, jargon and
            euphemisms. It also demands great familiarity with the (social as
            well as business) culture of the target audience. As a
            native-speaker of Brazilian Portuguese, a near-native speaker of
            English and Dutch, and a business-level proficiency in Japanese, I
            offer (professional) translations from/to English, Dutch and
            Brazilian Portuguese, and B1-B2 level translations to/from Japanese.
          </p>
          <p>
            <b>Document types:</b> company/product presentations, activity
            reports, annual reports, brochures, correspondence, guides, media
            kits, partner agreements, press releases, surveys, documents for age
            rating classification (PEGI, CERO, Classificação Indicativa),
            promo's, advertisements
          </p>
        </Content>
        <br />

        <Content className="localization">
          <img src={translation} className="icons" alt="/" />
          <h1 className="header2">Localization</h1>
          <p>
            Maybe you have found yourself in need of localization (or should I
            say 'localisation'?), either for your website or for your mobile
            application, or perhaps for a game you're working on developing.
            Fear not! American English or British English, Japan's Hokkaido-ben
            or Osaka-ben, I'll even take your side on the "biscoito ou bolacha"
            debate - whatever it may be, I'm able to localize all your needs
            (...well, almost all). On top of that, I'm self-taught in basic
            programming - how about this fancy webside, eh? - and as such I'm
            able to deal with all the programming that goes under the hood, so
            you don't have to worry about that.
          </p>
        </Content>
        <br />

        <Content className="transcription">
          <img src={subtitles2} className="icons" alt="/" />
          <h1 className="header2">Transcription</h1>
          <p>
            Manual transcription of one hour of audio can easily take up 4 to 9
            hours of work, and anyone who's a little familiar with the arduous
            process of transcribing would gladly hand it over to someone else if
            they could. I will gladly be the person who takes that load from
            you. I'm comfortable with all Brazilian Portuguese, English, Dutch
            and Japanese accents and dialects. Verbatim or edited
            transcriptions? "Um..." No problem!
          </p>
          <p>
            <b>Document types:</b> business meetings, conference calls,
            e-courses, interviews, lectures, oral narratives, podcasts, vlogs,
            webcasts, YouTube videos
          </p>
        </Content>
      </Router>
    </div>
  );
}

export default Services;
