import React from 'react';
import { motion } from 'framer-motion';

import infoStyles from './styles.module.scss';

const Info = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div>
      <motion.div
        className={infoStyles.sectionOneFour}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <h4 className={infoStyles.infoOneFour}>
          Loop helps you create and maintain good habits, allowing you to
          achieve your long-term goals. Detailed graphs and statistics show you
          how your habits improved over time. The app is completely ad-free and
          open source.
        </h4>
      </motion.div>

      <div className={infoStyles.sectionTwoThree}>
        <div className={infoStyles.sectionTwoThreeText}>
          <div>
            <h4>Simple, beautiful and modern interface</h4>
            <p>
              Loop has a minimalistic interface that is easy to use and follows
              the material design guidelines.
            </p>
          </div>
          <div>
            <h4>Habit score</h4>
            <p>
              In addition to showing your current streak, Loop has an advanced
              formula for calculating the strength of your habits. Every
              repetition makes your habit stronger, and every missed day makes
              it weaker. A few missed days after a long streak, however, will
              not completely destroy your entire progress.
            </p>
          </div>
          <div>
            <h4>Detailed graphs and statistics</h4>
            <p>
              Clearly see how your habits improved over time with beautiful and
              detailed graphs. Scroll back to see the complete history of your
              habits.
            </p>
          </div>
        </div>
        <div className={infoStyles.sectionTwoThreeImages}>
          Images will go here
        </div>
      </div>

      <div className={infoStyles.sectionTwoThree}>
        <div className={infoStyles.sectionTwoThreeText}>
          <div>
            <h4>Flexible schedules</h4>
            <p>
              Supports both daily habits and habits with more complex schedules,
              such as 3 times every week; one time every other week; or every
              other day.
            </p>
          </div>
          <div>
            <h4>Reminders</h4>
            <p>
              Create an individual reminder for each habit, at a chosen hour of
              the day. Easily check, dismiss or snooze your habit directly from
              the notification, without opening the app.
            </p>
          </div>
          <div>
            <h4>Optimized for smartwatches</h4>
            <p>
              Reminders can be checked or dismissed directly from your Android
              Wear watch.
            </p>
          </div>
        </div>
        <div className={infoStyles.sectionTwoThreeImages}>
          Images will go here
        </div>
      </div>

      <div>
        <motion.div
          className={infoStyles.sectionOneFour}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className={infoStyles.infoOneFour}>
            <h3>And finally</h3>
            <div>
              <h4>Completely ad-free and open source</h4>
              <p>
                There are absolutely no advertisements, annoying notifications
                or intrusive permissions in this app, and there will never be.
                The complete source code is available under the GPLv3.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={infoStyles.download} id="download">
        <a
          className={infoStyles.link}
          href="https://play.google.com/store/apps/details?id=org.isoron.uhabits"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Click here to Download</h2>
        </a>
      </div>
    </div>
  );
};

export default Info;
