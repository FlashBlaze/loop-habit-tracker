import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import GitHubButton from 'react-github-btn';
import { InView } from 'react-intersection-observer';

import infoStyles from './styles.module.scss';

const Info = () => {
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
  const [isSectionTwoVisible, setisSectionTwoVisible] = useState(false);
  const [isSectionThreeVisible, setisSectionThreeVisible] = useState(false);

  const sectionTwoViewChange = inview => {
    if (!isSectionTwoVisible && inview) {
      setisSectionTwoVisible(true);
    }
  };

  const sectionThreeViewChange = inview => {
    if (!isSectionThreeVisible && inview) {
      setisSectionThreeVisible(true);
    }
  };

  const downloadViewChange = inview => {
    if (!isDownloadVisible && inview) {
      setIsDownloadVisible(true);
    }
  };

  const visibilityVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const listVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const itemVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 1000 },
  };

  const carouselSettings = {
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 5000,
    transitionTime: 1000,
  };

  return (
    <div>
      <div className={infoStyles.sectionOne}>
        <motion.div
          className={infoStyles.sectionOneInfo}
          initial="hidden"
          animate="visible"
          variants={visibilityVariant}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h1>Loop - Habit Tracker</h1>
          <h6 className={infoStyles.sectionOneInfoText}>
            Loop helps you create and maintain good habits, allowing you to
            achieve your long-term goals. Detailed graphs and statistics show
            you how your habits improved over time.
          </h6>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={visibilityVariant}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Carousel {...carouselSettings} className={infoStyles.imageSequence}>
            <div>
              <img src="/uhabits1.png" alt="Screenshot 1 of app" />
              <p className="legend">Screenshot 1</p>
            </div>
            <div>
              <img src="/uhabits2.png" alt="Screenshot 2 of app" />
              <p className="legend2">Screenshot 2</p>
            </div>
          </Carousel>
        </motion.div>
      </div>

      <InView
        as="div"
        onChange={(inView, entry) => sectionTwoViewChange(inView)}
      >
        <div className={infoStyles.sectionTwo}>
          <motion.div
            initial="hidden"
            animate={isSectionTwoVisible ? 'visible' : 'hidden'}
            variants={visibilityVariant}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <Carousel
              {...carouselSettings}
              className={infoStyles.imageSequence}
            >
              <div>
                <img src="/uhabits3.png" alt="Screenshot 3 of app" />
                <p className="legend3">Screenshot 3</p>
              </div>
              <div>
                <img src="/uhabits4.png" alt="Screenshot 4 of app" />
                <p className="legend4">Screenshot 4</p>
              </div>
            </Carousel>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isSectionTwoVisible ? 'visible' : 'hidden'}
            variants={listVariant}
            transition={{ duration: 1 }}
          >
            <motion.div variants={itemVariant} transition={{ duration: 1.5 }}>
              <div className={infoStyles.sectionTwoInfoCard}>
                <h4>Simple, beautiful and modern interface</h4>
                <p>
                  Loop has a minimalistic interface that is easy to use and
                  follows the material design guidelines.
                </p>
              </div>

              <div className={infoStyles.sectionTwoInfoCard}>
                <h4>Habit score</h4>
                <p>
                  In addition to showing your current streak, Loop has an
                  advanced formula for calculating the strength of your habits.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariant} transition={{ duration: 1 }}>
              <div className={infoStyles.sectionTwoInfoCard}>
                <h4>Detailed graphs and statistics</h4>
                <p>
                  Clearly see how your habits improved over time with beautiful
                  and detailed graphs.
                </p>
              </div>

              <div className={infoStyles.sectionTwoInfoCard}>
                <h4>Flexible schedules</h4>
                <p>
                  Supports both daily habits and habits with more complex
                  schedules, such as 3 times every week; one time every other
                  week; or every other day.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </InView>

      <InView
        as="div"
        onChange={(inView, entry) => sectionThreeViewChange(inView)}
      >
        <div className={infoStyles.sectionThree}>
          <motion.div
            initial="hidden"
            animate={isSectionThreeVisible ? 'visible' : 'hidden'}
            variants={listVariant}
            transition={{ duration: 1 }}
          >
            <motion.div
              className={infoStyles.sectionThreeInfoCard}
              variants={itemVariant}
              transition={{ duration: 1.3 }}
            >
              <h4>Reminders</h4>
              <p>
                Create an individual reminder for each habit, at a chosen hour
                of the day. Easily check, dismiss or snooze your habit directly
                from the notification, without opening the app.
              </p>
            </motion.div>

            <motion.div
              className={infoStyles.sectionThreeInfoCard}
              variants={itemVariant}
              transition={{ duration: 1.3 }}
            >
              <h4>Optimized for smartwatches</h4>
              <p>
                Reminders can be checked or dismissed directly from your Android
                Wear watch.
              </p>
            </motion.div>

            <motion.div
              className={infoStyles.sectionThreeInfoCard}
              variants={itemVariant}
              transition={{ duration: 1.3 }}
            >
              <h4>Completely ad-free and open source</h4>
              <p>
                There are absolutely no advertisements, annoying notifications
                or intrusive permissions in this app, and there will never be.
                Complete source code is on GitHub.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isSectionThreeVisible ? 'visible' : 'hidden'}
            variants={visibilityVariant}
            transition={{ duration: 1.3 }}
          >
            <Carousel
              {...carouselSettings}
              className={infoStyles.imageSequence}
            >
              <div>
                <img src="/uhabits5.jpg" alt="Screenshot 5 of app" />
                <p className="legend5">Screenshot 5</p>
              </div>
              <div>
                <img src="/uhabits6.png" alt="Screenshot 6 of app" />
                <p className="legend6">Screenshot 6</p>
              </div>
            </Carousel>
          </motion.div>
        </div>
      </InView>

      <InView as="div" onChange={(inView, entry) => downloadViewChange(inView)}>
        <motion.div
          className={infoStyles.sectionFour}
          id="download"
          animate={isDownloadVisible ? 'visible' : 'hidden'}
          variants={visibilityVariant}
          initial="hidden"
          transition={{ duration: 1.3 }}
        >
          <h1>Download</h1>
          <div className={infoStyles.sectionFourLinks}>
            <a
              href="https://play.google.com/store/apps/details?id=org.isoron.uhabits&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-AC-global-none-all-co-pr-py-PartBadges-Oct1515-1"
              alt="Play Store icon"
              className={infoStyles.sectionFourLink}
            >
              <img
                alt="Get it on Google Play"
                src="/play_store_logo.png"
                width="200px"
              />
            </a>

            <a
              href="https://f-droid.org/app/org.isoron.uhabits"
              alt="F-Droid icon"
              className={infoStyles.sectionFourLink}
            >
              <img
                alt="Get it on F-Droid"
                src="/f_droid_logo.png"
                width="200px"
              />
            </a>
            <div className={infoStyles.sectionFourLink}>
              <GitHubButton
                href="https://github.com/iSoron/uhabits"
                data-size="large"
                data-show-count="true"
                aria-label="Star iSoron/uhabits on GitHub"
              >
                Star
              </GitHubButton>
            </div>
          </div>
        </motion.div>
      </InView>
    </div>
  );
};

export default Info;
