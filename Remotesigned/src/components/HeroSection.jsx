import React, { useState } from 'react';
import './HeroSection.css';
import heroVideo from "../assets/hero.mp4";
import ageone from "../assets/ageone.webp";
import agetwo from "../assets/agetwo.webp";
import agethree from "../assets/agethree.webp";
import agefour from "../assets/agefour.webp";
import male from "../assets/male.jpg";
import female from "../assets/female.jpg";
import other from "../assets/other.jpg";
import FITNESSGOALone from "../assets/fitnessgoalone.webp";
import fgtwo from "../assets/fgtwo.avif";
import fgthree from "../assets/fgthree.jpg";
import fgfour from "../assets/fgfour.jpg";
import fgfive from "../assets/fgfive.webp";
import fgsix from "../assets/fgsix.jpg";
import calone from "../assets/calone.jpg";
import caltwo from "../assets/caltwo.jpg";
import calthree from "../assets/calthree.jpg";
import dypone from "../assets/dypone.jpg";
import dyptwo from "../assets/dyptwo.jpg";
import dypthree from "../assets/dypthree.jpg";
import dypfour from "../assets/dypfour.avif";
import dypfive from "../assets/dypfive.jpg";
import dypsix from "../assets/dypsix.webp";
import cteone from "../assets/cteone.jpg";
import ctetwo from "../assets/ctetwo.jpg";
import ctethree from "../assets/ctethree.jpg";  
import ctefour from "../assets/ctefour.jpg";
import ctefive from "../assets/ctefive.jpg";
import hatone from "../assets/hatone.avif";
import hattwo from "../assets/hattwo.webp";
import hatthree from "../assets/hatthree.avif";
import hatfour from "../assets/hatfour.jpeg";
import hatfive from "../assets/hatfive.webp";
import hatsix from "../assets/hatsix.png";
import ahcone from "../assets/ahcone.webp";
import ahctwo from "../assets/ahctwo.jpg";
import ahcthree from "../assets/ahcthree.jpg";
import ahcfour from "../assets/ahcfour.jpg";
import ahcfive from "../assets/ahcfive.webp";
import ahcsix from "../assets/ahcsix.jpg";
import wseone from "../assets/wseone.jpg";
import wsetwo from "../assets/wsetwo.jpg";
import wsethree from "../assets/wsethree.jpg";
import ybtone from "../assets/ybtone.png";
import ybttwo from "../assets/ybttwo.webp";
import ybtthree from "../assets/ybtthree.jpg";
import ltfone from "../assets/ltfone.webp";
import ltftwo from "../assets/ltftwo.webp";
import ltfthree from "../assets/ltfthree.webp";
import ltffour from "../assets/ltffour.jpg";
import ltffive from "../assets/ltffive.webp";
import ltfsix from "../assets/ltfsix.webp";

// Main HeroSection Component
export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState('hero');
  const [userAnswers, setUserAnswers] = useState({
    age: '',
    gender: '',
    fitnessGoal: '',
    currentActivityLevel: '',
    workoutPreference: '',
    timeCommitment: '',
    equipment: '',
    healthConditions: '',
    previousExperience: '',
    bodyType: '',
    targetAreas: [],
    motivation: '',
    challenges: []
  });
  const [apiResult, setApiResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAnswerUpdate = (question, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [question]: answer
    }));
  };
  
  const handleArrayAnswerUpdate = (question, value) => {
    setUserAnswers(prev => {
      const currentArray = prev[question] || [];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return {
        ...prev,
        [question]: newArray
      };
    });
  };
  
  const handleNext = () => {
    const stepFlow = {
      'hero': 'age',
      'age': 'gender',
      'gender': 'fitnessGoal',
      'fitnessGoal': 'currentActivityLevel',
      'currentActivityLevel': 'workoutPreference',
      'workoutPreference': 'timeCommitment',
      'timeCommitment': 'equipment',
      'equipment': 'healthConditions',
      'healthConditions': 'previousExperience',
      'previousExperience': 'bodyType',
      'bodyType': 'targetAreas',
      'targetAreas': 'results'
    };

    const next = stepFlow[currentStep] || 'hero';
    setCurrentStep(next);
    if (next === 'results') {
      submitAnswers();
    }
  };
  
  const handleBack = () => {
    const stepFlow = {
      'age': 'hero',
      'gender': 'age',
      'fitnessGoal': 'gender',
      'currentActivityLevel': 'fitnessGoal',
      'workoutPreference': 'currentActivityLevel',
      'timeCommitment': 'workoutPreference',
      'equipment': 'timeCommitment',
      'healthConditions': 'equipment',
      'previousExperience': 'healthConditions',
      'bodyType': 'previousExperience',
      'targetAreas': 'bodyType',
      'motivation': 'targetAreas',
      'challenges': 'motivation',
      'results': 'challenges'
    };
    
    setCurrentStep(stepFlow[currentStep] || 'hero');
  };
  
  const handleRestart = () => {
    setUserAnswers({
      age: '',
      gender: '',
      fitnessGoal: '',
      currentActivityLevel: '',
      workoutPreference: '',
      timeCommitment: '',
      equipment: '',
      healthConditions: '',
      previousExperience: '',
      bodyType: '',
      targetAreas: [],
      motivation: '',
      challenges: []
    });
    setApiResult(null);
    setIsLoading(false);
    setCurrentStep('hero');
  };

  // SMART LOGIC: Monday to Sunday Plan Generation
  const generateSmartPlan = (answers) => {
    let weeklySchedule = [];
    let title = "General Fitness Routine";
    let focusText = "Overall Health";

    if (answers.fitnessGoal === 'muscle-gain') {
      title = "Muscle Building Routine";
      focusText = "Strength & Hypertrophy";
      weeklySchedule = [
        { day: 'Monday', focus: 'Push (Chest, Shoulders, Triceps)', exercises: ['Push-ups x 15', 'Pike Push-ups x 12', 'Diamond Push-ups x 10', 'Tricep Dips x 12'] },
        { day: 'Tuesday', focus: 'Pull (Back, Biceps)', exercises: ['Pull-ups x 8', 'Chin-ups x 8', 'Bodyweight Rows x 15', 'Superman Hold x 30s'] },
        { day: 'Wednesday', focus: 'Legs & Abs', exercises: ['Squats x 20', 'Lunges x 15 each', 'Calf Raises x 20', 'Plank x 1 min', 'Leg Raises x 15'] },
        { day: 'Thursday', focus: 'Upper Body Endurance', exercises: ['Incline Push-ups x 20', 'Australian Pull-ups x 15', 'Pike Push-ups x 12', 'Dips x 15'] },
        { day: 'Friday', focus: 'Full Body HIIT', exercises: ['Burpees x 10', 'Jump Squats x 15', 'Mountain Climbers x 20', 'High Knees x 30s'] },
        { day: 'Saturday', focus: 'Core & Mobility', exercises: ['Plank Variations x 3 sets', 'Hanging Leg Raises x 10', 'Yoga Flow x 10 mins', 'Deep Stretching'] },
        { day: 'Sunday', focus: 'Rest & Recovery', exercises: ['Light Walking', 'Foam Rolling', 'Hydration', 'Sleep 8+ hours'] }
      ];
    } else if (answers.fitnessGoal === 'weight-loss') {
      title = "Fat Burn Routine";
      focusText = "High Intensity & Cardio";
      weeklySchedule = [
        { day: 'Monday', focus: 'High Intensity Interval Training (HIIT)', exercises: ['Burpees x 15', 'Jumping Jacks x 30', 'High Knees x 30s', 'Mountain Climbers x 20'] },
        { day: 'Tuesday', focus: 'Full Body Circuit', exercises: ['Squat Jumps x 15', 'Push-ups x 15', 'Lunges x 20', 'Plank x 45s'] },
        { day: 'Wednesday', focus: 'Core & Cardio', exercises: ['Running in Place x 5 mins', 'Bicycle Crunches x 20', 'Leg Raises x 15', 'Shadow Boxing x 3 mins'] },
        { day: 'Thursday', focus: 'Endurance Training', exercises: ['Jump Rope (or imaginary) x 5 mins', 'Step-ups x 20', 'Wall Sit x 45s', 'Tricep Dips x 15'] },
        { day: 'Friday', focus: 'Metabolic Conditioning', exercises: ['Sprints in Place x 30s', 'Push-up to Plank x 10', 'Speed Squats x 20', 'Burpees x 10'] },
        { day: 'Saturday', focus: 'Active Recovery', exercises: ['Brisk Walking 30 mins', 'Light Yoga', 'Mobility Drills'] },
        { day: 'Sunday', focus: 'Rest Day', exercises: ['Relax', 'Meal Prep', 'Mental Rest'] }
      ];
    } else if (answers.fitnessGoal === 'flexibility') {
      title = "Flexibility & Mobility Routine";
      focusText = "Stretching & Balance";
      weeklySchedule = [
        { day: 'Monday', focus: 'Lower Body Flexibility', exercises: ['Hamstring Stretches x 60s', 'Quad Stretches x 60s', 'Pigeon Pose x 60s', 'Butterfly Stretch x 60s'] },
        { day: 'Tuesday', focus: 'Upper Body Mobility', exercises: ['Shoulder Rolls x 20', 'Arm Circles x 20', 'Cat-Cow Stretch x 10', 'Doorway Chest Stretch x 30s'] },
        { day: 'Wednesday', focus: 'Yoga Flow', exercises: ['Sun Salutation x 5 cycles', 'Downward Dog x 1 min', 'Warrior Poses x 30s each', 'Child’s Pose x 1 min'] },
        { day: 'Thursday', focus: 'Core & Balance', exercises: ['Single Leg Stand x 30s', 'Plank x 30s', 'Side Plank x 20s', 'Tree Pose x 30s'] },
        { day: 'Friday', focus: 'Full Body Stretch', exercises: ['Standing Toe Touch x 30s', 'Side Bends x 10', 'Spine Twist x 10', 'Neck Stretches'] },
        { day: 'Saturday', focus: 'Active Mobility', exercises: ['Light Walking', 'Dynamic Stretching', 'Joint Rotations'] },
        { day: 'Sunday', focus: 'Rest & Meditation', exercises: ['Deep Breathing', 'Meditation', 'Light Foam Rolling'] }
      ];
    } else {
       // Default
       weeklySchedule = [
        { day: 'Monday', focus: 'Full Body Strength', exercises: ['Push-ups x 10', 'Squats x 15', 'Plank x 30s'] },
        { day: 'Tuesday', focus: 'Cardio', exercises: ['Jogging in place x 5 mins', 'Jumping Jacks x 20'] },
        { day: 'Wednesday', focus: 'Core', exercises: ['Crunches x 15', 'Leg Raises x 10'] },
        { day: 'Thursday', focus: 'Upper Body', exercises: ['Dips x 10', 'Wall Push-ups x 15'] },
        { day: 'Friday', focus: 'Lower Body', exercises: ['Lunges x 10', 'Calf Raises x 20'] },
        { day: 'Saturday', focus: 'Active Rest', exercises: ['Walking', 'Light Stretching'] },
        { day: 'Sunday', focus: 'Rest', exercises: ['Relax'] }
      ];
    }

    return {
      planTitle: title,
      goalFocus: focusText,
      schedule: weeklySchedule
    };
  };

  const submitAnswers = async () => {
    setIsLoading(true);
    setApiResult(null);

    // Fake 3 second delay for realism
    await new Promise(resolve => setTimeout(resolve, 10000));

    const smartPlan = generateSmartPlan(userAnswers);
    setApiResult(smartPlan);
    setIsLoading(false);
  };
  
  // Render logic
  if (currentStep === 'hero') {
    return <HeroView onStart={() => setCurrentStep('age')} />;
  }
  
  if (currentStep === 'age') {
    return (
      <QuestionStep
        title="PILATES FOR BEGINNERS"
        subtitle="SELECT YOUR AGE TO START"
        quizText="1-MINUTE QUIZ"
        options={[
          { id: '18-29', label: '18-29', image: ageone },
          { id: '30-39', label: '30-39', image: agetwo },
          { id: '40-49', label: '40-49', image: agethree },
          { id: '50+', label: '50+', image: agefour }
        ]}
        selectedValue={userAnswers.age}
        onSelect={(value) => handleAnswerUpdate('age', value)}
        onNext={handleNext}
        onBack={handleBack}
        isAgeSelection={true}
      />
    );
  }
  
  if (currentStep === 'gender') {
    return (
      <QuestionStep
        title="SELECT YOUR GENDER"
        subtitle="This helps us personalize your fitness plan"
        options={[
          { id: 'male', label: 'Male', image: male },
          { id: 'female', label: 'Female', image: female },
          { id: 'other', label: 'couple', image: other }
        ]}
        selectedValue={userAnswers.gender}
        onSelect={(value) => handleAnswerUpdate('gender', value)}
        onNext={handleNext}
        onBack={handleBack}
      />
    );
  }
  
  if (currentStep === 'fitnessGoal') {
    return (
      <QuestionStep
        title="WHAT'S YOUR MAIN FITNESS GOAL?"
        subtitle="Select the option that best describes your goal"
        options={[
          { id: 'weight-loss', label: 'Weight Loss', image: FITNESSGOALone },
          { id: 'muscle-gain', label: 'Muscle Gain', image: fgtwo },
          { id: 'flexibility', label: 'Flexibility & Balance', image: fgthree },
          { id: 'endurance', label: 'Endurance', image: fgfour },
          { id: 'overall-health', label: 'Overall Health', image: fgfive },
          { id: 'stress-relief', label: 'Stress Relief', image: fgsix }
        ]}
        selectedValue={userAnswers.fitnessGoal}
        onSelect={(value) => handleAnswerUpdate('fitnessGoal', value)}
        onNext={handleNext}
        onBack={handleBack}
      />
    );
  }
  
  if (currentStep === 'currentActivityLevel') {
    return (
      <QuestionStep
        title="HOW WOULD YOU DESCRIBE YOUR CURRENT ACTIVITY LEVEL?"
        subtitle="Be honest - this helps us create the right plan for you"
        options={[
          { id: 'lightly-active', label: 'Lightly Active', description: 'Light exercise 1-3 days/week', image: calone },
          { id: 'moderately-active', label: 'Moderately Active', description: 'Moderate exercise 3-5 days/week', image: caltwo },
          { id: 'extremely-active', label: 'Extremely Active', description: 'Very hard exercise & physical job', image: calthree }
        ]}
        selectedValue={userAnswers.currentActivityLevel}
        onSelect={(value) => handleAnswerUpdate('currentActivityLevel', value)}
        onNext={handleNext}
        onBack={handleBack}
        hasDescription={true}
      />
    );
  }
  
  if (currentStep === 'workoutPreference') {
    return (
      <QuestionStep
        title="WHAT TYPE OF WORKOUTS DO YOU PREFER?"
        subtitle="Select all that apply"
        options={[
          { id: 'cardio', label: 'Cardio', image: dypone },
          { id: 'strength', label: 'Strength Training', image: dyptwo },
          { id: 'yoga', label: 'Yoga/Pilates', image: dypthree },
          { id: 'hiit', label: 'HIIT', image: dypfour },
          { id: 'dance', label: 'Dance', image: dypfive },
          { id: 'sports', label: 'Sports', image: dypsix }
        ]}
        selectedValues={userAnswers.workoutPreference}
        onSelect={(value) => handleArrayAnswerUpdate('workoutPreference', value)}
        onNext={handleNext}
        onBack={handleBack}
        isMultiSelect={true}
      />
    );
  }
  
  if (currentStep === 'timeCommitment') {
    return (
      <QuestionStep
        title="HOW MUCH TIME CAN YOU COMMIT TO EXERCISE?"
        subtitle="Be realistic about your schedule"
        options={[
          { id: '10-15', label: '10-15 minutes per day', image: cteone },
          { id: '20-30', label: '20-30 minutes per day', image: ctetwo },
          { id: '30-45', label: '30-45 minutes per day', image: ctethree },
          { id: '45-60', label: '45-60 minutes per day', image: ctefour },
          { id: '60+', label: '60+ minutes per day', image: ctefive }
        ]}
        selectedValue={userAnswers.timeCommitment}
        onSelect={(value) => handleAnswerUpdate('timeCommitment', value)}
        onNext={handleNext}
        onBack={handleBack}
      />
    );
  }
  
  if (currentStep === 'equipment') {
    return (
      <QuestionStep
        title="WHAT EQUIPMENT DO YOU HAVE ACCESS TO?"
        subtitle="Select all that apply"
        options={[
          { id: 'none', label: 'No equipment (bodyweight only)', image: hatone },
          { id: 'dumbbells', label: 'Dumbbells', image: hattwo },
          { id: 'resistance-bands', label: 'Resistance Bands', image: hatthree },
          { id: 'yoga-mat', label: 'Yoga Mat', image: hatfour },
          { id: 'pull-up-bar', label: 'Pull-up Bar', image: hatfive },
          { id: 'full-gym', label: 'Full Gym Access', image: hatsix }
        ]}
        selectedValues={userAnswers.equipment}
        onSelect={(value) => handleArrayAnswerUpdate('equipment', value)}
        onNext={handleNext}
        onBack={handleBack}
        isMultiSelect={true}
      />
    );
  }
  
  if (currentStep === 'healthConditions') {
    return (
      <QuestionStep
        title="DO YOU HAVE ANY HEALTH CONDITIONS?"
        subtitle="Select all that apply"
        options={[
          { id: 'back-pain', label: 'Back Pain', image: ahcone },
          { id: 'joint-issues', label: 'Joint Issues', image: ahctwo },
          { id: 'heart-condition', label: 'Heart Condition', image: ahcthree },
          { id: 'diabetes', label: 'Diabetes', image: ahcfour },
          { id: 'asthma', label: 'Asthma', image: ahcfive },
          { id: 'other', label: 'Other', image: ahcsix }
        ]}
        selectedValues={userAnswers.healthConditions}
        onSelect={(value) => handleArrayAnswerUpdate('healthConditions', value)}
        onNext={handleNext}
        onBack={handleBack}
        isMultiSelect={true}
      />
    );
  }
  
  if (currentStep === 'previousExperience') {
    return (
      <QuestionStep
        title="WHAT'S YOUR EXPERIENCE WITH STRUCTURED EXERCISE?"
        subtitle="This helps us set the right difficulty level"
        options={[
          { id: 'beginner', label: 'Complete Beginner', description: 'I\'m new to structured exercise', image: wseone },
          { id: 'intermediate', label: 'Intermediate', description: 'I exercise regularly but want to improve', image: wsetwo },
          { id: 'advanced', label: 'Advanced', description: 'I\'m very experienced with fitness', image: wsethree }
        ]}
        selectedValue={userAnswers.previousExperience}
        onSelect={(value) => handleAnswerUpdate('previousExperience', value)}
        onNext={handleNext}
        onBack={handleBack}
        hasDescription={true}
      />
    );
  }
  
  if (currentStep === 'bodyType') {
    return (
      <QuestionStep
        title="SELECT YOUR BODY TYPE"
        subtitle="This helps us create a more targeted plan"
        options={[
          { id: 'ectomorph', label: 'Ectomorph', description: 'Lean, thin build, difficulty gaining weight', image: ybtone },
          { id: 'mesomorph', label: 'Mesomorph', description: 'Muscular, athletic build, gains muscle easily', image: ybttwo },
          { id: 'endomorph', label: 'Endomorph', description: 'Softer, rounder build, gains fat easily', image: ybtthree }
        ]}
        selectedValue={userAnswers.bodyType}
        onSelect={(value) => handleAnswerUpdate('bodyType', value)}
        onNext={handleNext}
        onBack={handleBack}
        hasDescription={true}
      />
    );
  }
  
  if (currentStep === 'targetAreas') {
    return (
      <QuestionStep
        title="WHICH AREAS WOULD YOU LIKE TO FOCUS ON?"
        subtitle="Select all that apply"
        options={[
          { id: 'arms', label: 'Arms', image: ltfone },
          { id: 'chest', label: 'Chest', image: ltftwo},
          { id: 'back', label: 'Back', image: ltfthree },
          { id: 'abs', label: 'Abs/Core', image: ltffour },
          { id: 'glutes', label: 'Glutes', image: ltffive },
          { id: 'legs', label: 'Legs', image: ltfsix },
        ]}
        selectedValues={userAnswers.targetAreas}
        onSelect={(value) => handleArrayAnswerUpdate('targetAreas', value)}
        onNext={handleNext}
        onBack={handleBack}
        isMultiSelect={true}
      />
    );
  }
  
  if (currentStep === 'results') {
    return (
      <Results
        userAnswers={userAnswers}
        apiResult={apiResult}
        isLoading={isLoading}
        onRestart={handleRestart}
      />
    );
  }
  
  return <div>Step not found</div>;
}

// Hero View Component
function HeroView({ onStart }) {
  return (
    <section className="hero">
      <div className="hero-background">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">NEW FITNESS ROUTINE</h1>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2>HYBRID</h2> Calisthenics Overview (2025)
            </h3>
            <p className="hero-subtitle" style={{ color: 'white' }}>
              Transform your body with bodyweight exercises. No gym required.
            </p>
            <button className="hero-cta-btn" onClick={onStart}>START NOW</button>
          </div>
          <div className="hero-image"></div>
        </div>
      </div>
    </section>
  );
}

// Question Step Component
function QuestionStep({ title, subtitle, quizText, options, selectedValue, selectedValues, onSelect, onNext, onBack, isMultiSelect = false, isAgeSelection = false, hasDescription = false }) {
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  
  React.useEffect(() => {
    if (isMultiSelect) {
      setIsNextEnabled(selectedValues && selectedValues.length > 0);
    } else {
      setIsNextEnabled(!!selectedValue);
    }
  }, [selectedValue, selectedValues, isMultiSelect]);
  
  const handleContinue = () => {
    if (isNextEnabled) onNext();
  };
  
  return (
    <div className="question-step-container">
      <div className="question-step-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        {quizText && <div className="quiz-badge">{quizText}</div>}
      </div>
      
      <div className="question-content">
        <h1 className="question-title">{title}</h1>
        <p className="question-subtitle">{subtitle}</p>
        
        <div className={`options-container ${isAgeSelection ? 'age-options' : hasDescription ? 'description-options' : 'standard-options'}`}>
          {options.map(option => {
            const isSelected = isMultiSelect ? (selectedValues && selectedValues.includes(option.id)) : selectedValue === option.id;
            return (
              <div key={option.id} className={`option-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(option.id)}>
                <div className="option-image-container">
                  <img src={option.image} alt={option.label} />
                  <div className="option-overlay"></div>
                </div>
                <div className="option-content">
                  <div className="option-label">{option.label}</div>
                  {option.description && <div className="option-description">{option.description}</div>}
                </div>
                {isAgeSelection && <div className="arrow-icon">→</div>}
              </div>
            );
          })}
        </div>
        
        <button className={`continue-btn ${isNextEnabled ? 'enabled' : 'disabled'}`} onClick={handleContinue} disabled={!isNextEnabled}>
          Continue
        </button>
        
        {isAgeSelection && <p className="terms-text">By continuing, you agree to our Terms of Service and Privacy Policy</p>}
      </div>
    </div>
  );
}

// Results Component (Clean Table Format)
function Results({ userAnswers, apiResult, isLoading, onRestart }) {
  return (
    <div className="results-container" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <div className="results-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '10px' }}>Your Personalized Plan is Ready!</h1>
        <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>Based on your answers, here is your custom weekly routine.</p>
      </div>
      
      <div className="results-summary" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #070606' }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '15px', borderBottom: '1px solid #0a0a0a', paddingBottom: '10px' }}>Your Profile Summary</h3>
        <div style={{ color: '#333', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
          <div><strong>Age:</strong> {userAnswers.age}</div>
          <div><strong>Gender:</strong> {userAnswers.gender}</div>
          <div><strong>Goal:</strong> {userAnswers.fitnessGoal}</div>
          <div><strong>Experience:</strong> {userAnswers.previousExperience}</div>
          <div><strong>Time:</strong> {userAnswers.timeCommitment} mins/day</div>
        </div>
      </div>
      
      {isLoading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div className="loader-spinner" style={{ margin: '0 auto', border: '5px solid #f3f3f3', borderTop: '5px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
          <p style={{ marginTop: '20px', fontSize: '18px', color: '#555' }}>Generating your custom workout plan...</p>
          <p style={{ color: '#999' }}>Analyzing {userAnswers.fitnessGoal} goals and experience level</p>
        </div>
      ) : (
        apiResult && (
          <div className="plan-display">
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ color: '#2c3e50', margin: 0 }}>{apiResult.planTitle}</h2>
              <span style={{ background: '#27ae60', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '14px' }}>
                {apiResult.goalFocus}
              </span>
            </div>
            
            {/* Weekly Schedule Table */}
            <div style={{ display: 'grid', gap: '15px' }}>
              {apiResult.schedule.map((item, index) => (
                <div key={index} style={{ 
                  background: item.day === 'Sunday' ? '#ffebee' : 'white', 
                  border: '1px solid #e0e0e0', 
                  borderRadius: '8px', 
                  padding: '15px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ color: '#2980b9', margin: 0 }}>{item.day}</h3>
                    <span style={{ fontSize: '14px', color: '#666', fontWeight: 'bold' }}>{item.focus}</span>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#444' }}>
                    {item.exercises.map((ex, i) => (
                      <li key={i} style={{ marginBottom: '5px' }}>{ex}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )
      )}
      
      {!isLoading && (
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <button style={{ background: '#27ae60', color: 'white', border: 'none', padding: '15px 40px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
            Start Your Program
          </button>
          <button onClick={onRestart} style={{ background: 'white', color: '#333', border: '1px solid #ccc', padding: '15px 30px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer' }}>
            Change Information
          </button>
        </div>
      )}
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}