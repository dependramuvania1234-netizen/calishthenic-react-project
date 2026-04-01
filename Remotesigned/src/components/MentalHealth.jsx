import React, { useState } from 'react';
import "./MentalHealth.css";
import DBreathing from '../assets/DBreathing.jpg';
import BBreathing from '../assets/BBreathing.webp';
import Journaling from '../assets/journaling.webp';
import Nature from '../assets/natureWalk.jpg';
import DigitalDetox from '../assets/DigitalDetox.jpg';
import Music from '../assets/MusicTherapy.jpg';
import StopOverthinking from '../assets/StopOverthinking.png';
import SocialAnxiety from '../assets/SocialAnxietyTips.jpg';
import PanicControl from '../assets/PanicControl.jpg';
import DailyMotivation from '../assets/DailyMotivation.jpg';
import Consistency from '../assets/ConsistencyTips.jpg';
import LifeGoals from '../assets/LifeGoalsFocus.jpg';
import WakeUpEarly from '../assets/WakeUpEarly.jpg';
import SleepRoutine from '../assets/SleepRoutine.avif';
import NoPhone from '../assets/NoPhone.jpg';
import DeepWork from '../assets/DeepWork.jpg';
import StudyFocus from '../assets/StudyWork.jpg';
import TimeBlocking from '../assets/TimeBlocking.jpg';
import WhySleep from '../assets/WhySleep.png';
import FixSleep from '../assets/FixSleep.jpg';
import NightRoutine from '../assets/NightRoutine.avif';
import Positive from '../assets/Positive.jpg';
import StopComparing from '../assets/StopComparing.jpg';
import BuildIdentity from '../assets/BuildIdentity.avif';
import Stress from '../assets/Stress.jpg';
import Anxiety from '../assets/Anxiety.jpg';
import Depression from '../assets/Depression.jpg';


const MentalHealth = () => {
  const [activeTab, setActiveTab] = useState('mood');
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navTabs = [
    { id: 'mood', label: 'Mood', icon: '🧠' },
    { id: 'stress', label: 'Stress', icon: '🌊' },
    { id: 'anxiety', label: 'Anxiety', icon: '🌀' },
    { id: 'motivation', label: 'Motivation', icon: '⚡' },
    { id: 'habits', label: 'Habits', icon: '🔄' },
    { id: 'focus', label: 'Focus', icon: '🎯' },
    { id: 'sleep', label: 'Sleep', icon: '🌙' },
    { id: 'confidence', label: 'Confidence', icon: '💪' },
    { id: 'learn', label: 'Learn', icon: '📚' }
  ];

  // Mood Tracker Data with enhanced visual elements
  const moodCards = [
    { 
      id: 1, 
      title: 'Happy', 
      color: '#06b323',
      bgGradient: 'linear-gradient(135deg, #06b323, #07fb99)',
      icon: '😊',
      tips: [
        'Maintain this positive state through gratitude practice',
        'Share your joy with others to amplify it',
        'Document what contributed to this feeling',
        'Use this energy to tackle challenging tasks',
        'Consider helping someone else to extend your happiness'
      ]
    },
    { 
      id: 2, 
      title: 'Neutral', 
      color: '#06b323',
      bgGradient: 'linear-gradient(135deg, #06b323, #07fb99)',
      icon: '😐',
      tips: [
        'Check in with your physical needs (food, water, rest)',
        'Try a brief 5-minute mindfulness exercise',
        'Step outside for fresh air and natural light',
        'Engage in an activity that typically brings you satisfaction',
        'Consider what might add meaning to your current experience'
      ]
    },
    { 
      id: 3, 
      title: 'Sad', 
      color: '#06b323',
      bgGradient: 'linear-gradient(135deg, #06b323, #07fb99)',
      icon: '😔',
      tips: [
        'Allow yourself to feel without judgment',
        'Talk to someone you trust about your feelings',
        'Engage in a comforting activity (warm bath, tea)',
        'Watch content that typically elevates your mood',
        'Remember that emotions are temporary and fluctuate'
      ]
    },
    { 
      id: 4, 
      title: 'Stressed', 
      color: '#06b323',
      bgGradient: 'linear-gradient(135deg, #06b323, #07fb99)',
      icon: '😤',
      tips: [
        'Practice 4-7-8 breathing: inhale for 4, hold for 7, exhale for 8',
        'Write down everything contributing to your stress',
        'Prioritize your top 3 concerns',
        'Take a 10-minute walk without electronic devices',
        'Try progressive muscle relaxation techniques'
      ]
    },
    { 
      id: 5, 
      title: 'Low Energy', 
      color: '#06b323',
      bgGradient: 'linear-gradient(135deg, #06b323, #07fb99)',
      icon: '😴',
      tips: [
        'Check your hydration levels and water intake',
        'Try 5 minutes of gentle stretching',
        'Expose yourself to natural light for 10-15 minutes',
        'Consider a nutritious snack with protein',
        'Take a 20-minute power nap if circumstances allow'
      ]
    }
  ];

  // Stress Management Data with enhanced visual elements
  const stressCards = [
    { 
      id: 1, 
      title: 'Deep Breathing', 
      icon: '🌬️',
      bgImage: `url("${DBreathing}")`,
      content: [
        'Find a comfortable position with proper posture',
        'Inhale slowly through your nose for 4 seconds',
        'Hold your breath for 7 seconds',
        'Exhale completely through your mouth for 8 seconds',
        'Repeat 3-4 times',
        'Practice this technique when you feel stress building'
      ]
    },
    { 
      id: 2, 
      title: 'Box Breathing', 
      icon: '⬜',
      bgImage: `url("${BBreathing}")`,
      content: [
        'Inhale slowly for a count of 4',
        'Hold your breath for a count of 4',
        'Exhale slowly for a count of 4',
        'Hold at the bottom for a count of 4',
        'This creates a "box" pattern with your breath',
        'Used by professionals to maintain calm under pressure'
      ]
    },
    { 
      id: 3, 
      title: 'Journaling', 
      icon: '📝',
      bgImage: `url("${Journaling}")`,
      content: [
        'Write down your thoughts without judgment',
        'Focus on feelings rather than events',
        'Try "brain dumping" - write everything on your mind',
        'End with 3 things you\'re grateful for',
        'Consistency matters more than length',
        '5-10 minutes daily can significantly reduce stress'
      ]
    },
    { 
      id: 4, 
      title: 'Nature Walk', 
      icon: '🌳',
      bgImage: `url("${Nature}")`,
      content: [
        'Find a green space, even a small park works',
        'Walk at a comfortable pace, not for exercise',
        'Notice 5 things you can see, 4 you can hear',
        'Feel the ground beneath your feet',
        'Notice the temperature and air on your skin',
        '20 minutes in nature reduces stress hormones'
      ]
    },
    { 
      id: 5, 
      title: 'Digital Detox', 
      icon: '📵',
      bgImage: `url("${DigitalDetox}")`,
      content: [
        'Set specific "no device" times during the day',
        'Turn off non-essential notifications',
        'Create device-free zones (bedroom, dining table)',
        'Try a 1-hour digital detox daily',
        'Use apps that track and limit screen time',
        'Replace scrolling with a mindful activity'
      ]
    },
    { 
      id: 6, 
      title: 'Music Therapy', 
      icon: '🎵',
      bgImage: `url("${Music}")`,
      content: [
        'Create playlists for different moods',
        'Try nature sounds or binaural beats',
        'Listen to music at 60-80 BPM for relaxation',
        'Experiment with instrumental vs. lyrical music',
        'Combine music with deep breathing exercises',
        'Even 10 minutes of calming music reduces stress'
      ]
    }
  ];

  // Anxiety Help Data with enhanced visual elements
  const anxietyCards = [
  
    { 
      id: 2, 
      title: 'Stop Overthinking', 
      icon: '🛑',
      bgImage: `url("${StopOverthinking}")`,
      content: [
        'Notice when you\'re stuck in thought loops',
        'Ask: "Is this thought helpful right now?"',
        'Set a "worry time" - 15 minutes daily to process concerns',
        'Write down the thought and physically close the notebook',
        'Distract yourself with a sensory activity',
        'Practice thought-stopping techniques when needed'
      ]
    },
    { 
      id: 4, 
      title: 'Social Anxiety Tips', 
      icon: '👥',
      bgImage: `url("${SocialAnxiety}")`,
      content: [
        'Start with small social interactions',
        'Prepare a few conversation topics in advance',
        'Focus on listening rather than speaking',
        'Set realistic goals (e.g., talk to one person)',
        'Remember that most people are focused on themselves',
        'Practice breathing techniques before social situations'
      ]
    },
    { 
      id: 5, 
      title: 'Panic Control', 
      icon: '🆘',
      bgImage: `url("${PanicControl}")`,
      content: [
        'Recognize it\'s a panic response, not danger',
        'Focus on your breathing: slow, deep breaths',
        'Use the 5-4-3-2-1 grounding technique',
        'Remind yourself: "This will pass"',
        'Apply temperature change (cold water on face)',
        'Find a quiet space and sit if possible'
      ]
    }
  ];

  // Motivation Hub Data with enhanced visual elements
  const motivationCards = [
    { 
      id: 1, 
      title: 'Daily Motivation', 
      icon: '🌅',
      bgImage: `url("${DailyMotivation}")`,
      content: [
        'Start your day with a positive affirmation',
        'Set one meaningful intention for the day',
        'Review your purpose - what drives you',
        'Visualize successfully completing your tasks',
        'Create a morning ritual that energizes you',
        'Remember: motivation follows action, not the other way around'
      ]
    },
    { 
      id: 3, 
      title: 'Consistency Tips', 
      icon: '🔄',
      bgImage: `url("${Consistency}")`,
      content: [
        'Habit stack: add new habits to existing ones',
        'Use the "2-minute rule" - start with just 2 minutes',
        'Never miss twice - if you miss one day, get back on track',
        'Prepare in advance to reduce friction',
        'Track your streaks to build momentum',
        'Focus on identity change: "I am someone who..."'
      ]
    },
    { 
      id: 5, 
      title: 'Life Goals Focus', 
      icon: '🎯',
      bgImage: 'url("https://picsum.photos/seed/goals/400/300.jpg")',
      content: [
        'Write down your top 3-5 life goals',
        'Break each goal into quarterly milestones',
        'Review your goals weekly to stay aligned',
        'Create a vision board for daily inspiration',
        'Share your goals with someone for accountability',
        'Celebrate small wins along the way'
      ]
    }
  ];

  // Habits & Discipline Data with enhanced visual elements
  const habitsCards = [
    { 
      id: 1, 
      title: 'Wake Up Early', 
      icon: '⏰',
      bgImage: `url("${WakeUpEarly}")`,
      content: [
        'Shift your bedtime 15 minutes earlier each night',
        'Place your alarm across the room',
        'Have a morning routine you look forward to',
        'Expose yourself to natural light immediately',
        'Avoid screens for the first 30 minutes',
        'Consistent wake times regulate your circadian rhythm'
      ]
    },
    { 
      id: 2, 
      title: 'Sleep Routine', 
      icon: '😴',
      bgImage: `url("${SleepRoutine}")`,
      content: [
        'Set a consistent bedtime, even on weekends',
        'Create a "wind down" ritual 30-60 minutes before bed',
        'Keep your bedroom cool (60-67°F / 15-19°C)',
        'Use blackout curtains or an eye mask',
        'Avoid caffeine after 2 PM',
        'Reserve your bed for sleep only'
      ]
    },
    { 
      id: 3, 
      title: 'No Phone Before Bed', 
      icon: '📱',
      bgImage: `url("${NoPhone}")`,
      content: [
        'Set a "device curfew" 1 hour before bed',
        'Use a traditional alarm clock instead of your phone',
        'Charge your phone outside the bedroom',
        'Replace device time with reading or journaling',
        'Use blue light filtering if you must use screens',
        'Create a designated area for your phone away from sleeping areas'
      ]
    },

  ];

  // Focus & Productivity Data with enhanced visual elements
  const focusCards = [
 
    { 
      id: 2, 
      title: 'Deep Work', 
      icon: '🧠',
      bgImage: `url("${DeepWork}")`,
      content: [
        'Schedule 90-minute blocks of uninterrupted work',
        'Eliminate all distractions during these blocks',
        'Work on your most cognitively demanding tasks',
        'Create a transition ritual to enter deep work mode',
        'Track your deep work hours weekly',
        'Quality of focus matters more than quantity of time'
      ]
    },

    { 
      id: 4, 
      title: 'Study/Work Focus', 
      icon: '📚',
      bgImage: `url("${StudyFocus}")`,
      content: [
        'Define clear objectives for each session',
        'Break large tasks into smaller, specific actions',
        'Use the Feynman technique: explain concepts simply',
        'Take strategic breaks to maintain performance',
        'Review your work at the end of each session',
        'Create accountability through study/work partners'
      ]
    },
    { 
      id: 5, 
      title: 'Time Blocking', 
      icon: '📅',
      bgImage: `url("${TimeBlocking}")`,
      content: [
        'Schedule your entire day in blocks',
        'Group similar tasks together',
        'Include buffer time between blocks',
        'Block time for breaks and meals',
        'Color-code different types of activities',
        'Review and adjust your blocks weekly'
      ]
    }
  ];

  // Sleep Health Data with enhanced visual elements
  const sleepCards = [
    { 
      id: 1, 
      title: 'Why Sleep Matters', 
      icon: '💤',
      bgImage: `url("${WhySleep}")`,
      content: [
        'Sleep affects memory consolidation and learning',
        'It regulates hormones that control appetite',
        'Lack of sleep impairs decision-making',
        'Quality sleep boosts immune function',
        'Sleep deprivation increases risk of mental health issues',
        'Adults need 7-9 hours of quality sleep nightly'
      ]
    },
    { 
      id: 2, 
      title: 'Fix Sleep Schedule', 
      icon: '⏰',
      bgImage: `url("${FixSleep}")`,
      content: [
        'Go to bed and wake up at the same time daily',
        'Create a relaxing bedtime routine',
        'Avoid large meals 2-3 hours before bed',
        'Limit liquids 1 hour before sleeping',
        'Exercise regularly but not close to bedtime',
        'Be patient - it takes time to reset your circadian rhythm'
      ]
    },
    { 
      id: 3, 
      title: 'Night Routine', 
      icon: '🌙',
      bgImage: `url("${NightRoutine}")`,
      content: [
        'Dim lights 1-2 hours before bed',
        'Take a warm bath or shower',
        'Practice gentle stretching or yoga',
        'Read a physical book (not on screens)',
        'Try meditation or deep breathing exercises',
        'Write tomorrow\'s top 3 priorities to clear your mind'
      ]
    },
   
  ];

  // Self Confidence Data with enhanced visual elements
  const confidenceCards = [
    { 
      id: 1, 
      title: 'Positive Self-Talk', 
      icon: '💬',
      bgImage: `url("${Positive}")`,
      content: [
        'Notice negative self-talk patterns',
        'Challenge negative thoughts with evidence',
        'Replace "I can\'t" with "I\'ll try"',
        'Practice daily affirmations that feel authentic',
        'Speak to yourself as you would a good friend',
        'Remember: thoughts are not facts'
      ]
    },
    { 
      id: 2, 
      title: 'Stop Comparing', 
      icon: '🚫',
      bgImage: `url("${StopComparing}")`,
      content: [
        'Recognize when you\'re comparing yourself to others',
        'Remember you\'re comparing your reality to their highlights',
        'Focus on your own progress, not others\' achievements',
        'Practice gratitude for what you have',
        'Limit social media if it triggers comparison',
        'Celebrate your unique journey and strengths'
      ]
    },
    { 
      id: 3, 
      title: 'Build Identity', 
      icon: '🎭',
      bgImage: `url("${BuildIdentity}")`,
      content: [
        'Define your values and what matters to you',
        'Make decisions aligned with these values',
        'Develop skills that make you feel capable',
        'Set boundaries that protect your energy',
        'Surround yourself with people who support your growth',
        'Remember: your worth isn\'t determined by others\' opinions'
      ]
    },

  ];

  // Mental Health Education Data with enhanced visual elements
  const educationCards = [
    { 
      id: 1, 
      title: 'What is Stress', 
      icon: '😰',
      bgImage: `url("${Stress}")`,
      content: [
        'Stress is your body\'s response to pressure',
        'Short-term stress can be beneficial (fight or flight)',
        'Chronic stress harms physical and mental health',
        'Symptoms include irritability, fatigue, and sleep problems',
        'Stress activates cortisol, the "stress hormone"',
        'Managing stress is a skill that can be learned'
      ]
    },
    { 
      id: 2, 
      title: 'What is Anxiety', 
      icon: '😟',
      bgImage: `url("${Anxiety}")`,
      content: [
        'Anxiety is a feeling of worry, nervousness, or unease',
        'It\'s a normal response to stress but can become a disorder',
        'Physical symptoms include rapid heartbeat and sweating',
        'Anxiety disorders affect 1 in 5 people annually',
        'It often involves excessive worry about future events',
        'Treatment includes therapy, medication, and lifestyle changes'
      ]
    },
    { 
      id: 3, 
      title: 'What is Depression', 
      icon: '☁️',
      bgImage: `url("${Depression}")`,
      content: [
        'Depression is more than just sadness - it\'s a medical condition',
        'Symptoms include persistent low mood and loss of interest',
        'It affects how you feel, think, and handle daily activities',
        'Depression can be caused by genetic, biological, environmental factors',
        'It often runs in families and can be triggered by life events',
        'It\'s treatable with therapy, medication, or both',
        'If symptoms last more than 2 weeks, seek professional help'
      ]
    },

  ];

  // Emergency Support Data with enhanced visual elements
  const emergencySupport = {
    title: 'Need Professional Help?',
    bgImage: 'url("https://picsum.photos/seed/help/800/400.jpg")',
    content: [
      'If you\'re feeling overwhelmed, talk to someone you trust or seek professional help.',
      'Mental health is just as important as physical health.',
      'There\'s no shame in reaching out for support.',
      'Professionals can provide tools and strategies tailored to your needs.',
      'Early intervention often leads to better outcomes.',
      'You deserve to feel better - help is available.'
    ],
    resources: [
      { name: 'National Crisis Hotline', contact: '988' },
      { name: 'Crisis Text Line', contact: 'Text HOME to 741741' },
      { name: 'Veterans Crisis Line', contact: '1-800-273-8255 (Press 1)' },
      { name: 'LGBTQ+ Support', contact: '1-866-488-7386' }
    ]
  };

  const handleCardClick = (card, section) => {
    setSelectedCard({ ...card, section });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const renderCards = (cards, section) => {
    return (
      <div className="grid">
        {cards.map(card => (
          <div 
            key={card.id} 
            className="card-enhanced"
            style={{ backgroundImage: card.bgImage }}
            onClick={() => handleCardClick(card, section)}
          >
            <div className="card-overlay">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>Click to learn more</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mental-health">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="title">Mental Wellness Hub</h1>
          <p className="hero-subtitle">Your comprehensive guide to mental wellbeing</p>
        </div>
        <div className="hero-image">
          <div className="brain-animation"></div>
        </div>
      </div>
      
      {/* Enhanced Navigation Tabs */}
      <div className="nav-tabs-enhanced">
        {navTabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab-enhanced ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Mood Tracker Section */}
      {activeTab === 'mood' && (
        <div className="section">
          <h2 className="section-title">How are you feeling today?</h2>
          <div className="mood-tracker-enhanced">
            {moodCards.map(mood => (
              <div 
                key={mood.id} 
                className="mood-card-enhanced" 
                style={{ background: mood.bgGradient }}
                onClick={() => handleCardClick(mood, 'mood')}
              >
                <div className="mood-icon">{mood.icon}</div>
                <div className="mood-label">{mood.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stress Management Section */}
      {activeTab === 'stress' && (
        <div className="section">
          <h2 className="section-title">Stress Management Techniques</h2>
          {renderCards(stressCards, 'stress')}
        </div>
      )}

      {/* Anxiety Help Section */}
      {activeTab === 'anxiety' && (
        <div className="section">
          <h2 className="section-title">Anxiety Relief Strategies</h2>
          {renderCards(anxietyCards, 'anxiety')}
        </div>
      )}

      {/* Motivation Hub Section */}
      {activeTab === 'motivation' && (
        <div className="section">
          <h2 className="section-title">Motivation & Drive</h2>
          {renderCards(motivationCards, 'motivation')}
        </div>
      )}

      {/* Habits & Discipline Section */}
      {activeTab === 'habits' && (
        <div className="section">
          <h2 className="section-title">Building Better Habits</h2>
          {renderCards(habitsCards, 'habits')}
        </div>
      )}

      {/* Focus & Productivity Section */}
      {activeTab === 'focus' && (
        <div className="section">
          <h2 className="section-title">Focus & Productivity</h2>
          {renderCards(focusCards, 'focus')}
        </div>
      )}

      {/* Sleep Health Section */}
      {activeTab === 'sleep' && (
        <div className="section">
          <h2 className="section-title">Sleep Health</h2>
          {renderCards(sleepCards, 'sleep')}
        </div>
      )}

      {/* Self Confidence Section */}
      {activeTab === 'confidence' && (
        <div className="section">
          <h2 className="section-title">Building Self-Confidence</h2>
          {renderCards(confidenceCards, 'confidence')}
        </div>
      )}

      {/* Mental Health Education Section */}
      {activeTab === 'learn' && (
        <div className="section">
          <h2 className="section-title">Mental Health Education</h2>
          {renderCards(educationCards, 'education')}
          
          {/* Enhanced Emergency Support Section */}
          <div className="emergency-support-enhanced" style={{ backgroundImage: emergencySupport.bgImage }}>
            <div className="emergency-overlay">
              <div className="emergency-description">
                <h3>{emergencySupport.title}</h3>
                <p>{emergencySupport.content[0]}</p>
              </div>
              <div className="resources">
                {emergencySupport.resources.map((resource, index) => (
                  <div key={index} className="resource-card-enhanced">
                    <h4>{resource.name}</h4>
                    <div className="resource-contact">{resource.contact}</div>
                  </div>
                ))}
              </div>
              <div className="disclaimer-enhanced">
                <p><strong>Disclaimer:</strong> This website is not a substitute for professional medical advice, diagnosis, or treatment. If you are in a life-threatening situation, call 911 immediately.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Modal */}
      {showModal && selectedCard && (
        <div className="modal-enhanced" onClick={closeModal}>
          <div className="modal-box-enhanced" onClick={(e) => e.stopPropagation()}>
            {selectedCard.section === 'mood' && (
              <div className="mood-header-enhanced" style={{ background: selectedCard.bgGradient }}>
                <div className="mood-icon-large">{selectedCard.icon}</div>
                <h2>{selectedCard.title}</h2>
              </div>
            )}
            
            {selectedCard.section !== 'mood' && (
              <div className="modal-header-enhanced" style={{ backgroundImage: selectedCard.bgImage }}>
                <div className="modal-header-overlay">
                  <div className="modal-icon">{selectedCard.icon}</div>
                  <h2>{selectedCard.title}</h2>
                </div>
              </div>
            )}
            
            <div className="modal-content-enhanced">
              {selectedCard.tips && (
                <>
                  <h3>Strategies for when you're experiencing {selectedCard.title.toLowerCase()}:</h3>
                  <div className="tips-enhanced">
                    {selectedCard.tips.map((tip, index) => (
                      <div key={index} className="tip-item-enhanced">
                        <span className="tip-number">{index + 1}</span>
                        <span className="tip-text">{tip}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {selectedCard.content && (
                <>
                  <h3>Key Information:</h3>
                  <div className="content-enhanced">
                    {selectedCard.content.map((item, index) => (
                      <div key={index} className="content-item-enhanced">
                        <span className="content-bullet">▸</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="modal-actions-enhanced">
              <button className="modal-btn-enhanced primary" onClick={closeModal}>Got It</button>
              <button className="modal-btn-enhanced secondary">Save for Later</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentalHealth;