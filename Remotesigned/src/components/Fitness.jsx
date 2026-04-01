import React, { useState } from "react";
import "./Fitness.css";
import Beginnerworkout from '../assets/Beginnerworkout.jpg';
import Fatlossworkout from '../assets/Fatlossworkout.jpg';
import Musclegainworkout from '../assets/Musclegainworkout.webp';
import CalisthenicsBasics from '../assets/CalisthenicsBasics.png'
import HomeWorkout from '../assets/HomeWorkout.jpg'
import AdvancedAthlete from '../assets/AdvancedAthlete.webp'
import HIITWorkout from '../assets/HIITWorkout.png'
import CoreStrength from '../assets/CoreStrength.webp'
import UpperBody from '../assets/UpperBody.png'
import LowerBody from '../assets/LowerBody.avif'
import EnduranceRunner from '../assets/EnduranceRunner.webp'
import MobilityFlow from '../assets/MobilityFlow.jpg'
import StrengthFoundation from '../assets/StrengthFoundation.jpg'
import AdvancedCalisthenics from '../assets/AdvancedCalisthenics.jpg'
import DumbbellFullBody from '../assets/DumbbellFullBody.avif'
import MuscleGainPlan from '../assets/MuscleGainPlan.webp'
import sixpackplan from '../assets/sixpackplan.webp'
import StrengthPlan from '../assets/StrengthPlan.avif';
import FlexibilityPlan from '../assets/FlexibilityPlan.jpg';
import NoEquipmentWorkout from '../assets/NoEquipmentWorkout.webp';
import ResistanceBand from '../assets/ResistanceBand.avif';
import PullupBar from '../assets/PullupBar.webp';
import GymMachines from '../assets/GymMachines.png';
import QuickWorkout from '../assets/QuickWorkout.jpg';
import second from '../assets/second.jpg';
import proper from '../assets/proper.jpg';

// Workout Programs Data - Expanded with more options for each category
const workoutPrograms = [
  {
    id: 1,
    title: "Beginner Workout",
    img: Beginnerworkout,
    duration: "30 min",
    difficulty: "Beginner",
    category: ["Beginner", "Home Workout"],
    description: "Perfect for those just starting their fitness journey",
    exercises: ["Push-ups", "Squats", "Plank", "Lunges"],
    benefits: ["Builds foundation", "Improves flexibility", "Increases stamina"],
    equipment: "None required"
  },
  {
    id: 2,
   title: "Fat Loss Workout",
    img: Fatlossworkout,
    duration: "45 min",
    difficulty: "Intermediate",
    category: ["Fat Loss", "HIIT"],
    description: "High-intensity workout to burn calories effectively",
    exercises: ["Burpees", "Mountain Climbers", "Jumping Jacks", "High Knees"],
    benefits: ["Burns 400+ calories", "Boosts metabolism", "Improves cardiovascular health"],
    equipment: "None required"
  },
  {
    id: 3,
    title: "Muscle Gain Workout",
    img: Musclegainworkout,
    duration: "60 min",
    difficulty: "Intermediate",
    category: ["Muscle Gain", "Gym Workout"],
    description: "Build muscle mass with targeted resistance training",
    exercises: ["Bench Press", "Deadlifts", "Pull-ups", "Shoulder Press"],
    benefits: ["Increases muscle mass", "Improves strength", "Enhances metabolism"],
    equipment: "Gym equipment"
  },
  {
    id: 4,
    title: "Calisthenics Basics",
    img: CalisthenicsBasics,
    duration: "40 min",
    difficulty: "Beginner",
    category: ["Calisthenics", "Beginner"],
    description: "Master your body weight with fundamental movements",
    exercises: ["Push-ups", "Pull-ups", "Dips", "Squats"],
    benefits: ["Improves body control", "Builds functional strength", "No equipment needed"],
    equipment: "Pull-up bar (optional)"
  },
  {
    id: 5,
    title: "Home Workout (No Equipment)",
    img: HomeWorkout,
    duration: "25 min",
    difficulty: "Beginner",
    category: ["Home Workout", "No Equipment"],
    description: "Effective workout without any equipment",
    exercises: ["Jumping Jacks", "Push-ups", "Plank", "Squats"],
    benefits: ["Convenient", "Full body workout", "No cost"],
    equipment: "None required"
  },
  {
    id: 6,
    title: "Advanced Athlete",
    img: AdvancedAthlete,
    duration: "75 min",
    difficulty: "Advanced",
    category: ["Advanced", "Gym Workout"],
    description: "Challenge yourself with this intense workout",
    exercises: ["Olympic Lifts", "Plyometrics", "Complex Movements", "Conditioning"],
    benefits: ["Peak performance", "Elite athleticism", "Maximum strength"],
    equipment: "Advanced gym equipment"
  },
  {
    id: 7,
    title: "HIIT Workout",
    img: HIITWorkout,
    duration: "20 min",
    difficulty: "Intermediate",
    category: ["HIIT", "Fat Loss"],
    description: "Short but intense workout for maximum calorie burn",
    exercises: ["Sprint Intervals", "Burpees", "Kettlebell Swings", "Battle Ropes"],
    benefits: ["Time efficient", "Burns fat", "Improves endurance"],
    equipment: "Kettlebells, Battle Ropes"
  },
  {
    id: 8,
    title: "Core Strength",
    img: CoreStrength,
    duration: "30 min",
    difficulty: "Intermediate",
    category: ["Core", "Strength"],
    description: "Build a strong and stable core",
    exercises: ["Plank Variations", "Russian Twists", "Leg Raises", "Hollow Hold"],
    benefits: ["Better posture", "Reduced back pain", "Improved balance"],
    equipment: "Exercise mat"
  },
  {
    id: 9,
    title: "Upper Body",
    img: UpperBody,
    duration: "45 min",
    difficulty: "Intermediate",
    category: ["Upper Body", "Gym Workout"],
    description: "Strengthen and tone your upper body",
    exercises: ["Bench Press", "Rows", "Shoulder Press", "Bicep Curls"],
    benefits: ["Defined arms", "Strong chest", "Improved posture"],
    equipment: "Dumbbells, Barbells"
  },
  {
    id: 10,
    title: "Lower Body",
    img: LowerBody,
    duration: "45 min",
    difficulty: "Intermediate",
    category: ["Lower Body", "Gym Workout"],
    description: "Build powerful legs and glutes",
    exercises: ["Squats", "Deadlifts", "Lunges", "Calf Raises"],
    benefits: ["Strong legs", "Better balance", "Increased metabolism"],
    equipment: "Squat rack, Dumbbells"
  },
  // Adding more workouts to ensure all categories have options
  {
    id: 11,
    title: "Endurance Runner",
    img: EnduranceRunner,
    duration: "60 min",
    difficulty: "Intermediate",
    category: ["Endurance", "Cardio"],
    description: "Build stamina and cardiovascular health",
    exercises: ["Running Intervals", "Hill Sprints", "Tempo Run", "Recovery Jog"],
    benefits: ["Improved heart health", "Increased stamina", "Better lung capacity"],
    equipment: "Running shoes"
  },
  {
    id: 12,
    title: "Mobility Flow",
    img: MobilityFlow,
    duration: "30 min",
    difficulty: "Beginner",
    category: ["Mobility", "Flexibility"],
    description: "Improve joint mobility and flexibility",
    exercises: ["Dynamic Stretches", "Joint Rotations", "Yoga Flow", "Foam Rolling"],
    benefits: ["Better range of motion", "Reduced injury risk", "Improved posture"],
    equipment: "Yoga mat, Foam roller"
  },
  {
    id: 13,
    title: "Strength Foundation",
    img: StrengthFoundation,
    duration: "50 min",
    difficulty: "Intermediate",
    category: ["Strength", "Gym Workout"],
    description: "Build a solid strength foundation",
    exercises: ["Compound Lifts", "Progressive Overload", "Accessory Work", "Core Training"],
    benefits: ["Increased strength", "Muscle growth", "Better bone density"],
    equipment: "Barbells, Dumbbells"
  },
  {
    id: 14,
    title: "Advanced Calisthenics",
    img: AdvancedCalisthenics,
    duration: "45 min",
    difficulty: "Advanced",
    category: ["Calisthenics", "Advanced"],
    description: "Master advanced bodyweight movements",
    exercises: ["Muscle-ups", "Handstand Push-ups", "Planche Progressions", "One-arm Pull-ups"],
    benefits: ["Exceptional strength", "Body control", "Impressive skills"],
    equipment: "Pull-up bar, Parallel bars"
  },
  {
    id: 15,
    title: "Dumbbell Full Body",
    img: DumbbellFullBody,
    duration: "40 min",
    difficulty: "Intermediate",
    category: ["Gym Workout", "Full Body"],
    description: "Complete workout using just dumbbells",
    exercises: ["Goblet Squats", "Dumbbell Press", "Single-arm Rows", "Lunges"],
    benefits: ["Balanced development", "Convenience", "Functional strength"],
    equipment: "Dumbbells"
  }
];

// Exercise Library Data - Expanded with 2 more exercises
const exerciseLibrary = [
  {
    id: 1,
    name: "Push-ups",
    difficulty: "Beginner",
    targetMuscle: "Chest, Shoulders, Triceps",
    tips: "Keep your body in a straight line from head to heels",
    mistakes: "Sagging hips, not going low enough, flaring elbows",
    variations: ["Wide grip", "Close grip", "Incline", "Decline"],
    progressions: ["Regular push-up", "Archer push-up", "One-arm push-up"],
    equipment: "None"
  },
  {
    id: 2,
    name: "Pull-ups",
    difficulty: "Intermediate",
    targetMuscle: "Back, Biceps",
    tips: "Start from a dead hang and pull your chin above the bar",
    mistakes: "Using momentum, not completing full range of motion",
    variations: ["Wide grip", "Close grip", "Chin-up", "Mixed grip"],
    progressions: ["Weighted pull-up", "Archer pull-up", "One-arm pull-up"],
    equipment: "Pull-up bar"
  },
  {
    id: 3,
    name: "Squats",
    difficulty: "Beginner",
    targetMuscle: "Quads, Glutes, Hamstrings",
    tips: "Keep your chest up and knees behind your toes",
    mistakes: "Leaning too far forward, heels lifting off ground",
    variations: ["Goblet squat", "Sumo squat", "Bulgarian split squat", "Pistol squat"],
    progressions: ["Barbell back squat", "Front squat", "Overhead squat"],
    equipment: "None (can add weights)"
  },
  {
    id: 4,
    name: "Plank",
    difficulty: "Beginner",
    targetMuscle: "Core, Shoulders",
    tips: "Engage your core and keep your body in a straight line",
    mistakes: "Sagging hips, lifting hips too high, holding breath",
    variations: ["Side plank", "Plank with leg lift", "Plank with arm reach", "Plank jack"],
    progressions: ["Longer duration", "Weighted plank", "Plank to push-up"],
    equipment: "Exercise mat"
  },
  {
    id: 5,
    name: "Dips",
    difficulty: "Intermediate",
    targetMuscle: "Triceps, Chest, Shoulders",
    tips: "Lower your body until elbows are at 90-degree angle",
    mistakes: "Shrugging shoulders, not going low enough",
    variations: ["Bench dips", "Parallel bar dips", "Ring dips", "Weighted dips"],
    progressions: ["Assisted dips", "Regular dips", "Weighted dips"],
    equipment: "Parallel bars or bench"
  },
  {
    id: 6,
    name: "Lunges",
    difficulty: "Beginner",
    targetMuscle: "Quads, Glutes, Hamstrings",
    tips: "Keep your front knee behind your toes and back knee close to ground",
    mistakes: "Leaning forward, front knee going past toes",
    variations: ["Reverse lunge", "Side lunge", "Walking lunge", "Jump lunge"],
    progressions: ["Bodyweight lunge", "Dumbbell lunge", "Barbell lunge"],
    equipment: "None (can add weights)"
  },
  {
    id: 7,
    name: "Burpees",
    difficulty: "Intermediate",
    targetMuscle: "Full Body",
    tips: "Move smoothly between each position and keep a steady pace",
    mistakes: "Not jumping back far enough, not standing up completely",
    variations: ["No push-up burpee", "Box jump burpee", "One-legged burpee"],
    progressions: ["Burpee with push-up", "Burpee with tuck jump", "Burpee with pull-up"],
    equipment: "None"
  },
  {
    id: 8,
    name: "Mountain Climbers",
    difficulty: "Beginner",
    targetMuscle: "Core, Shoulders, Legs",
    tips: "Keep your core tight and hips down",
    mistakes: "Raising hips too high, not bringing knees close to chest",
    variations: ["Cross-body mountain climbers", "Slow mountain climbers", "Mountain climber push-ups"],
    progressions: ["Faster pace", "Longer duration", "Weight vest"],
    equipment: "None"
  },
  // Adding 2 more exercises as requested
  {
    id: 9,
    name: "Deadlifts",
    difficulty: "Intermediate",
    targetMuscle: "Back, Glutes, Hamstrings, Core",
    tips: "Keep your back straight and lift with your legs, not your back",
    mistakes: "Rounding the back, using improper form, lifting too heavy too soon",
    variations: ["Conventional deadlift", "Sumo deadlift", "Romanian deadlift", "Trap bar deadlift"],
    progressions: ["Light weight", "Proper form", "Progressive overload"],
    equipment: "Barbell, Dumbbells or Kettlebells"
  },
  {
    id: 10,
    name: "Bench Press",
    difficulty: "Intermediate",
    targetMuscle: "Chest, Shoulders, Triceps",
    tips: "Keep your feet flat on the floor and maintain a slight arch in your lower back",
    mistakes: "Bouncing the bar off the chest, flaring elbows, lifting hips off the bench",
    variations: ["Flat bench press", "Incline bench press", "Decline bench press", "Close grip bench press"],
    progressions: ["Barbell bench press", "Dumbbell bench press", "Weighted dips"],
    equipment: "Bench, Barbell or Dumbbells"
  }
];

// Weekly Workout Plan - Expanded with more detailed information
const weeklyPlan = [
  { 
    day: "Monday", 
    workout: "Chest + Triceps",
    exercises: ["Bench Press", "Incline Dumbbell Press", "Cable Flyes", "Tricep Pushdowns", "Overhead Tricep Extension"],
    duration: "60 min",
    calories: "350-450"
  },
  { 
    day: "Tuesday", 
    workout: "Back + Biceps",
    exercises: ["Pull-ups", "Bent Over Rows", "Lat Pulldowns", "Barbell Curls", "Hammer Curls"],
    duration: "60 min",
    calories: "350-450"
  },
  { 
    day: "Wednesday", 
    workout: "Rest or Active Recovery",
    exercises: ["Light walking", "Stretching", "Foam rolling"],
    duration: "20-30 min",
    calories: "100-150"
  },
  { 
    day: "Thursday", 
    workout: "Legs",
    exercises: ["Squats", "Leg Press", "Romanian Deadlifts", "Leg Extensions", "Calf Raises"],
    duration: "70 min",
    calories: "400-500"
  },
  { 
    day: "Friday", 
    workout: "Core + Cardio",
    exercises: ["Plank variations", "Russian twists", "Hanging leg raises", "20 min HIIT cardio"],
    duration: "45 min",
    calories: "300-400"
  },
  { 
    day: "Saturday", 
    workout: "Full Body",
    exercises: ["Deadlifts", "Push-ups", "Rows", "Shoulder Press", "Lunges"],
    duration: "60 min",
    calories: "400-500"
  },
  { 
    day: "Sunday", 
    workout: "Mobility & Flexibility",
    exercises: ["Yoga flow", "Dynamic stretching", "Foam rolling", "Meditation"],
    duration: "40 min",
    calories: "150-200"
  }
];

// Goals based plans - Expanded with more details
const goalPlans = [
  {
    id: 1,
    title: "Fat Loss Plan",
    img: Fatlossworkout,
    description: "Burn fat effectively with this targeted plan",
    workouts: ["HIIT Workout", "Cardio Blast", "Full Body Circuit"],
    duration: "8-12 weeks",
    frequency: "5 days/week",
    expectedResults: "8-12 lbs fat loss"
  },
  {
    id: 2,
    title: "Muscle Gain Plan",
    img: MuscleGainPlan,
    description: "Build lean muscle with this progressive plan",
    workouts: ["Upper Body Strength", "Lower Body Power", "Hypertrophy Training"],
    duration: "12-16 weeks",
    frequency: "4-5 days/week",
    expectedResults: "5-10 lbs muscle gain"
  },
  {
    id: 3,
    title: "Six Pack Plan",
    img: sixpackplan,
    description: "Get defined abs with this core-focused plan",
    workouts: ["Core Crusher", "Ab Circuit", "Plank Challenge"],
    duration: "6-10 weeks",
    frequency: "4 days/week",
    expectedResults: "Visible abs definition"
  },
  {
    id: 4,
    title: "Strength Plan",
    img: StrengthPlan,
    description: "Increase your overall strength with this plan",
    workouts: ["Power Lifting", "Compound Movements", "Progressive Overload"],
    duration: "12-16 weeks",
    frequency: "4 days/week",
    expectedResults: "20-30% strength increase"
  },
  {
    id: 5,
    title: "Flexibility Plan",
    img: FlexibilityPlan,
    description: "Improve flexibility and prevent injuries",
    workouts: ["Yoga Flow", "Stretching Routine", "Mobility Work"],
    duration: "8-12 weeks",
    frequency: "3-4 days/week",
    expectedResults: "30% improved flexibility"
  },
];

// Equipment based workouts - Expanded with more details
const equipmentWorkouts = [
  {
    id: 1,
    title: "No Equipment Workout",
    img: NoEquipmentWorkout,
    description: "Effective workout using just your body weight",
    exercises: ["Push-ups", "Squats", "Plank", "Lunges", "Burpees", "Mountain Climbers"],
    duration: "30 min",
    difficulty: "Beginner to Intermediate"
  },
  {
    id: 2,
    title: "Dumbbell Workout",
    img: DumbbellFullBody,
    description: "Build strength with just dumbbells",
    exercises: ["Dumbbell Press", "Goblet Squats", "Rows", "Lunges", "Shoulder Press"],
    duration: "45 min",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    title: "Resistance Band",
    img: ResistanceBand,
    description: "Full body workout with resistance bands",
    exercises: ["Band Pull-aparts", "Band Squats", "Band Rows", "Band Chest Press", "Band Face Pulls"],
    duration: "35 min",
    difficulty: "Beginner to Intermediate"
  },
  {
    id: 4,
    title: "Pull-up Bar",
    img: PullupBar,
    description: "Upper body strength with just a pull-up bar",
    exercises: ["Pull-ups", "Chin-ups", "Hanging Leg Raises", "Australian Pull-ups", "Toes to Bar"],
    duration: "30 min",
    difficulty: "Intermediate to Advanced"
  },
  {
    id: 5,
    title: "Gym Machines",
    img: GymMachines,
    description: "Complete workout using gym machines",
    exercises: ["Leg Press", "Chest Press", "Lat Pulldown", "Shoulder Press", "Cable Curls"],
    duration: "50 min",
    difficulty: "Beginner to Intermediate"
  },

];

// Time based workouts - Expanded with more details
const timeWorkouts = [
  {
    id: 1,
    title: "10 min Quick Workout",
    img: QuickWorkout,
    duration: "10 min",
    description: "Perfect for busy days",
    exercises: ["Jumping Jacks", "Push-ups", "Squats", "Plank"],
    calories: "80-100"
  },
  {
    id: 2,
    title: "20 min Fat Burner",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    duration: "20 min",
    description: "Quick calorie burning session",
    exercises: ["Burpees", "High Knees", "Mountain Climbers", "Jump Squats"],
    calories: "200-250"
  },
  {
    id: 3,
    title: "30 min Full Body",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    duration: "30 min",
    description: "Complete workout in half an hour",
    exercises: ["Push-ups", "Squats", "Rows", "Lunges", "Plank"],
    calories: "250-350"
  },
  {
    id: 4,
    title: "45 min Intense Session",
    img: second,
    duration: "45 min",
    description: "Challenging workout for maximum results",
    exercises: ["Compound Lifts", "HIIT Circuits", "Core Finishers"],
    calories: "400-500"
  },
  // Adding more time-based options
  {
    id: 5,
    title: "15 min Morning Energizer",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    duration: "15 min",
    description: "Start your day with energy",
    exercises: ["Sun Salutations", "Dynamic Stretches", "Light Cardio"],
    calories: "100-150"
  },

];

// Beginner Help Section - Expanded with more details
const beginnerHelp = [
  {
    id: 1,
    title: "How to Start Gym",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    description: "Everything you need to know before starting",
    tips: ["Start with 2-3 days/week", "Focus on proper form", "Don't compare yourself to others"],
    commonMistakes: ["Lifting too heavy too soon", "Skipping warm-ups", "Not having a plan"]
  },
  {
    id: 2,
    title: "Proper Warm-up",
    img: proper,
    description: "Prepare your body for workout",
    tips: ["5-10 minutes light cardio", "Dynamic stretching", "Movement-specific warm-ups"],
    commonMistakes: ["Skipping warm-up entirely", "Static stretching before workout", "Not warming up the right muscles"]
  },
  {
    id: 3,
    title: "Cool Down Importance",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    description: "Help your body recover properly",
    tips: ["5-10 minutes light activity", "Static stretching", "Focus on worked muscles"],
    commonMistakes: ["Skipping cool down", "Not holding stretches long enough", "Stretching cold muscles"]
  },
  {
    id: 4,
    title: "Stretching Guide",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    description: "Improve flexibility and prevent injuries",
    tips: ["Hold stretches for 15-30 seconds", "Don't bounce", "Breathe deeply"],
    commonMistakes: ["Bouncing during stretches", "Holding breath", "Pushing to pain point"]
  },
  {
    id: 5,
    title: "Injury Prevention Tips",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    description: "Stay safe while working out",
    tips: ["Listen to your body", "Use proper form", "Rest when needed"],
    commonMistakes: ["Ignoring pain", "Lifting with ego", "Not allowing recovery time"]
  },

];

// Fitness Tips - Expanded with more details
const fitnessTips = [
  {
    id: 1,
    title: "Sleep Importance",
    icon: "🛌",
    description: "Quality sleep is crucial for muscle recovery and growth",
    details: "Aim for 7-9 hours of quality sleep per night. Poor sleep can hinder recovery, increase cortisol levels, and negatively impact performance."
  },
  {
    id: 2,
    title: "Water Intake",
    icon: "💧",
    description: "Stay hydrated to maintain performance and health",
    details: "Drink at least 8-10 glasses of water daily. Increase intake during workouts. Dehydration can reduce performance by up to 20%."
  },
  {
    id: 3,
    title: "Protein Intake",
    icon: "🥩",
    description: "Fuel your muscles with adequate protein",
    details: "Consume 0.8-1.2g of protein per pound of body weight. Include sources like lean meats, eggs, dairy, legumes, and quality protein supplements."
  },
  {
    id: 4,
    title: "Consistency Tips",
    icon: "📅",
    description: "Stay consistent for long-term results",
    details: "Create a realistic schedule, track your workouts, and find a workout buddy. Consistency beats intensity when starting out."
  },
  {
    id: 5,
    title: "Recovery Tips",
    icon: "🧘",
    description: "Allow your body to recover and grow stronger",
    details: "Incorporate rest days, active recovery, stretching, and foam rolling. Recovery is when your muscles actually grow and adapt."
  },
  // Adding more fitness tips
  {
    id: 6,
    title: "Mind-Muscle Connection",
    icon: "🧠",
    description: "Focus on the muscle you're working",
    details: "Concentrate on the target muscle during each exercise. This improves activation and leads to better results."
  },
  {
    id: 7,
    title: "Progressive Overload",
    icon: "📈",
    description: "Continually challenge your muscles",
    details: "Gradually increase weight, reps, or intensity over time. This is the key principle behind muscle growth and strength gains."
  }
];

export default function FitnessWorkout() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("workouts");
  const [planForm, setPlanForm] = useState({ age: '', gender: '', goal: '', experience: '', daysPerWeek: '' });
  const [isLoadingPlan, setIsLoadingPlan] = useState(false);
  const [planResult, setPlanResult] = useState(null);
  const [planError, setPlanError] = useState('');

  // Get unique categories
  const categories = ["All", "Beginner", "Intermediate", "Advanced", "Fat Loss", "Muscle Gain", "Strength", "Mobility", "Endurance", "Home Workout", "Gym Workout", "Calisthenics", "HIIT", "Core", "Upper Body", "Lower Body", "No Equipment", "Cardio", "Full Body"];

  // Filter workouts based on selected category
  const filteredWorkouts = filter === "All" 
    ? workoutPrograms 
    : workoutPrograms.filter(workout => workout.category.includes(filter));

  return (
    <div className="fitness-workout-container">
      <h1 className="fitness-workout-title">💪 Premium Fitness Plans</h1>

      {/* Navigation Tabs */}
      <div className="fitness-nav-tabs">
        <button 
          className={`fitness-nav-tab ${activeSection === "workouts" ? "active-tab" : ""}`}
          onClick={() => setActiveSection("workouts")}
        >
          Workout Programs
        </button>
        <button 
          className={`fitness-nav-tab ${activeSection === "exercises" ? "active-tab" : ""}`}
          onClick={() => setActiveSection("exercises")}
        >
          Exercise Library
        </button>
        <button 
          className={`fitness-nav-tab ${activeSection === "weekly" ? "active-tab" : ""}`}
          onClick={() => setActiveSection("weekly")}
        >
          Weekly Plan
        </button>
        <button 
          className={`fitness-nav-tab ${activeSection === "goals" ? "active-tab" : ""}`}
          onClick={() => setActiveSection("goals")}
        >
          Goal Plans
        </button>
        <button 
          className={`fitness-nav-tab ${activeSection === "equipment" ? "active-tab" : ""}`}
          onClick={() => setActiveSection("equipment")}
        >
          Equipment
        </button>
        <button 
          className={`fitness-nav-tab ${activeSection === "time" ? "active-tab" : ""}`}
          onClick={() => setActiveSection("time")}
        >
          Time Based
        </button>
        <button 
          className={`fitness-nav-tab ${activeSection === "beginner" ? "active-tab" : ""}`}
          onClick={() => setActiveSection("beginner")}
        >
          Beginner Help
        </button>
        <button 
          className={`fitness-nav-tab ${activeSection === "progress" ? "active-tab" : ""}`}
          onClick={() => setActiveSection("progress")}
        >
          Progress
        </button>
        <button 
          className={`fitness-nav-tab ${activeSection === "tips" ? "active-tab" : ""}`}
          onClick={() => setActiveSection("tips")}
        >
          Tips
        </button>
      </div>

      {/* Workout Programs Section */}
      {activeSection === "workouts" && (
        <div className="fitness-section">
          {/* Category Filter */}
          <div className="fitness-filter-container">
            <div className="fitness-filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`fitness-filter-btn ${filter === category ? 'active-filter' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="fitness-grid">
            {filteredWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="fitness-card"
                onClick={() => setActive(workout)}
              >
                <img src={workout.img} alt={workout.title} />
                <div className="fitness-overlay">
                  <h2 className="fitness-card-title">{workout.title}</h2>
                  <p className="fitness-card-info">{workout.duration} • {workout.difficulty}</p>
                  <div className="fitness-tags">
                    {workout.category.map((cat, i) => (
                      <span key={i} className="fitness-tag">{cat}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exercise Library Section */}
      {activeSection === "exercises" && (
        <div className="fitness-section">
          <h2 className="fitness-section-title">📚 Exercise Library</h2>
          <div className="fitness-grid">
            {exerciseLibrary.map((exercise) => (
              <div
                key={exercise.id}
                className="fitness-exercise-card"
                onClick={() => setActive(exercise)}
              >
                <div className="fitness-exercise-content">
                  <h3>{exercise.name}</h3>
                  <p><b>Difficulty:</b> {exercise.difficulty}</p>
                  <p><b>Target:</b> {exercise.targetMuscle}</p>
                  <p><b>Equipment:</b> {exercise.equipment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Weekly Workout Plan Section */}
      {activeSection === "weekly" && (
        <div className="fitness-section">
          <h2 className="fitness-section-title">📅 Weekly Workout Plan</h2>
          <div className="fitness-weekly-plan">
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Workout</th>
                  <th>Duration</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {weeklyPlan.map((plan, index) => (
                  <tr key={index} className={plan.workout.includes("Rest") ? "fitness-rest-day" : ""}>
                    <td>{plan.day}</td>
                    <td>{plan.workout}</td>
                    <td>{plan.duration}</td>
                    <td>{plan.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Goals based plans Section */}
      {activeSection === "goals" && (
        <div className="fitness-section">
          <h2 className="fitness-section-title">🎯 Goals Based Plans</h2>
          <div className="fitness-grid">
            {goalPlans.map((plan) => (
              <div
                key={plan.id}
                className="fitness-card"
                onClick={() => setActive(plan)}
              >
                <img src={plan.img} alt={plan.title} />
                <div className="fitness-overlay">
                  <h2 className="fitness-card-title">{plan.title}</h2>
                  <p>{plan.description}</p>
                  <p><b>Duration:</b> {plan.duration}</p>
                  <p><b>Frequency:</b> {plan.frequency}</p>
                  <p><b>Expected Results:</b> {plan.expectedResults}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Equipment based workouts Section */}
      {activeSection === "equipment" && (
        <div className="fitness-section">
          <h2 className="fitness-section-title">🏋️ Equipment Based Workouts</h2>
          <div className="fitness-grid">
            {equipmentWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="fitness-card"
                onClick={() => setActive(workout)}
              >
                <img src={workout.img} alt={workout.title} />
                <div className="fitness-overlay">
                  <h2 className="fitness-card-title">{workout.title}</h2>
                  <p>{workout.description}</p>
                  <p><b>Duration:</b> {workout.duration}</p>
                  <p><b>Difficulty:</b> {workout.difficulty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Time based workouts Section */}
      {activeSection === "time" && (
        <div className="fitness-section">
          <h2 className="fitness-section-title">⏱️ Time Based Workouts</h2>
          <div className="fitness-grid">
            {timeWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="fitness-card"
                onClick={() => setActive(workout)}
              >
                <img src={workout.img} alt={workout.title} />
                <div className="fitness-overlay">
                  <h2 className="fitness-card-title">{workout.title}</h2>
                  <p>{workout.duration} • {workout.description}</p>
                  <p><b>Calories Burned:</b> {workout.calories}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Beginner Help Section */}
      {activeSection === "beginner" && (
        <div className="fitness-section">
          <h2 className="fitness-section-title">🧠 New to Fitness?</h2>
          <div className="fitness-grid">
            {beginnerHelp.map((help) => (
              <div
                key={help.id}
                className="fitness-card"
                onClick={() => setActive(help)}
              >
                <img src={help.img} alt={help.title} />
                <div className="fitness-overlay">
                  <h2 className="fitness-card-title">{help.title}</h2>
                  <p>{help.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progress/Motivation UI Section */}
      {activeSection === "progress" && (
        <div className="fitness-section">
          <h2 className="fitness-section-title">📊 Your Progress</h2>
          <div className="fitness-progress-container">
            <div className="fitness-progress-card">
              <h3>🔥 Calories Burned</h3>
              <div className="fitness-progress-value">2,450</div>
              <div className="fitness-progress-bar">
                <div className="fitness-progress-fill" style={{width: '75%'}}></div>
              </div>
              <p>Weekly Goal: 3,000</p>
            </div>
            
            <div className="fitness-progress-card">
              <h3>📅 Workout Streak</h3>
              <div className="fitness-streak-container">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`fitness-streak-day ${i < 5 ? 'completed' : ''}`}>
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </div>
                ))}
              </div>
              <p>5 days this week</p>
            </div>
            
            <div className="fitness-progress-card">
              <h3>💪 Fitness Level</h3>
              <div className="fitness-level-container">
                <div className="fitness-level current">Beginner</div>
                <div className="fitness-level-arrow">→</div>
                <div className="fitness-level">Intermediate</div>
              </div>
              <p>3 workouts until next level</p>
            </div>
            
            <div className="fitness-progress-card">
              <h3>🏆 Achievements</h3>
              <div className="fitness-achievements">
                <div className="fitness-achievement" title="First Workout">🏃</div>
                <div className="fitness-achievement" title="Week Streak">🔥</div>
                <div className="fitness-achievement" title="5 Workouts">💪</div>
                <div className="fitness-achievement locked" title="10 Workouts">🏆</div>
                <div className="fitness-achievement locked" title="Month Streak">🌟</div>
              </div>
              <p>3 of 10 achievements unlocked</p>
            </div>
            
            {/* Adding more progress tracking cards */}
            <div className="fitness-progress-card">
              <h3>📈 Personal Records</h3>
              <div className="fitness-pr-container">
                <div className="fitness-pr-item">
                  <span className="fitness-pr-exercise">Bench Press</span>
                  <span className="fitness-pr-value">135 lbs</span>
                </div>
                <div className="fitness-pr-item">
                  <span className="fitness-pr-exercise">Squat</span>
                  <span className="fitness-pr-value">185 lbs</span>
                </div>
                <div className="fitness-pr-item">
                  <span className="fitness-pr-exercise">5K Run</span>
                  <span className="fitness-pr-value">24:30</span>
                </div>
              </div>
            </div>
            
            <div className="fitness-progress-card">
              <h3>📊 Body Measurements</h3>
              <div className="fitness-measurement-container">
                <div className="fitness-measurement-item">
                  <span className="fitness-measurement-part">Weight</span>
                  <span className="fitness-measurement-value">165 lbs</span>
                </div>
                <div className="fitness-measurement-item">
                  <span className="fitness-measurement-part">Body Fat</span>
                  <span className="fitness-measurement-value">18%</span>
                </div>
                <div className="fitness-measurement-item">
                  <span className="fitness-measurement-part">Muscle Mass</span>
                  <span className="fitness-measurement-value">135 lbs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fitness Tips Section */}
      {activeSection === "tips" && (
        <div className="fitness-section">
          <h2 className="fitness-section-title">💡 Fitness Tips</h2>
          <div className="fitness-tips-grid">
            {fitnessTips.map((tip) => (
              <div key={tip.id} className="fitness-tip-card">
                <div className="fitness-tip-icon">{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {active && (
        <div className="fitness-modal">
          <div className="fitness-modal-box">
            <h2>{active.title || active.name}</h2>
            
            {/* Workout Program Modal */}
            {active.duration && active.exercises && (
              <>
                <p><b>Duration:</b> {active.duration}</p>
                <p><b>Difficulty:</b> {active.difficulty}</p>
                <p><b>Description:</b> {active.description}</p>
                <p><b>Equipment:</b> {active.equipment}</p>
                
                <h3>Exercises:</h3>
                <ul>
                  {active.exercises.map((exercise, i) => (
                    <li key={i}>🏋️ {exercise}</li>
                  ))}
                </ul>
                
                <h3>Benefits:</h3>
                <ul>
                  {active.benefits.map((benefit, i) => (
                    <li key={i}>✅ {benefit}</li>
                  ))}
                </ul>
              </>
            )}
            
            {/* Exercise Library Modal */}
            {active.tips && (
              <>
                <p><b>Difficulty:</b> {active.difficulty}</p>
                <p><b>Target Muscle:</b> {active.targetMuscle}</p>
                <p><b>Equipment:</b> {active.equipment}</p>
                
                <h3>Tips:</h3>
                <p>{active.tips}</p>
                
                <h3>Common Mistakes:</h3>
                <p>{active.mistakes}</p>
                
                <h3>Variations:</h3>
                <p>{active.variations.join(", ")}</p>
                
                <h3>Progressions:</h3>
                <p>{active.progressions.join(", ")}</p>
              </>
            )}
            
            {/* Goal Plans Modal */}
            {active.workouts && (
              <>
                <p><b>Description:</b> {active.description}</p>
                <p><b>Duration:</b> {active.duration}</p>
                <p><b>Frequency:</b> {active.frequency}</p>
                <p><b>Expected Results:</b> {active.expectedResults}</p>
                
                <h3>Workouts:</h3>
                <ul>
                  {active.workouts.map((workout, i) => (
                    <li key={i}>💪 {workout}</li>
                  ))}
                </ul>
              </>
            )}
            
            {/* Weekly Plan Modal */}
            {active.exercises && Array.isArray(active.exercises[0]) && (
              <>
                <p><b>Workout:</b> {active.workout}</p>
                <p><b>Duration:</b> {active.duration}</p>
                <p><b>Calories:</b> {active.calories}</p>
                
                <h3>Exercises:</h3>
                <ul>
                  {active.exercises.map((exercise, i) => (
                    <li key={i}>🏋️ {exercise}</li>
                  ))}
                </ul>
              </>
            )}
            
            {/* Equipment/Time/Beginner Help Modal */}
            {active.description && !active.exercises && !active.workouts && !active.tips && (
              <>
                <p>{active.description}</p>
                {active.duration && <p><b>Duration:</b> {active.duration}</p>}
                {active.difficulty && <p><b>Difficulty:</b> {active.difficulty}</p>}
                {active.calories && <p><b>Calories Burned:</b> {active.calories}</p>}
              </>
            )}
            
            {/* Beginner Help Modal */}
            {active.tips && Array.isArray(active.tips) && (
              <>
                <p>{active.description}</p>
                
                <h3>Tips:</h3>
                <ul>
                  {active.tips.map((tip, i) => (
                    <li key={i}>✅ {tip}</li>
                  ))}
                </ul>
                
                <h3>Common Mistakes:</h3>
                <ul>
                  {active.commonMistakes.map((mistake, i) => (
                    <li key={i}>❌ {mistake}</li>
                  ))}
                </ul>
              </>
            )}
            
            {/* Fitness Tips Modal */}
            {active.details && (
              <>
                <p>{active.description}</p>
                <p>{active.details}</p>
              </>
            )}
            
            <button className="fitness-modal-close-btn" onClick={() => setActive(null)}>Close</button>
          </div>
        </div>
      )}

        {/* Inline Personalized Plan Generator */}
        <section className="custom-fitness-section">
          <div className="custom-fitness-box">
            <h2 className="custom-fitness-title">Generate Your Personalized Workout Plan</h2>
            <p className="custom-fitness-info">Fill basic details and generate a tailored workout plan (simulates API).</p>

            <div className="custom-fitness-form" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10}}>
              <input placeholder="Age" type="number" value={planForm.age} onChange={e => setPlanForm({...planForm, age: e.target.value})} />
              <select value={planForm.gender} onChange={e => setPlanForm({...planForm, gender: e.target.value})}>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <select value={planForm.goal} onChange={e => setPlanForm({...planForm, goal: e.target.value})}>
                <option value="">Primary Goal</option>
                <option value="fat-loss">Fat Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="endurance">Endurance</option>
                <option value="flexibility">Flexibility</option>
              </select>
              <select value={planForm.experience} onChange={e => setPlanForm({...planForm, experience: e.target.value})}>
                <option value="">Experience</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <input placeholder="Days per week" type="number" value={planForm.daysPerWeek} onChange={e => setPlanForm({...planForm, daysPerWeek: e.target.value})} />
              <div></div>
            </div>

            <div style={{marginTop:12}}>
              <button className="generate-plan-btn" onClick={async () => {
                if (!planForm.age || !planForm.gender || !planForm.goal) return alert('Please fill Age, Gender and Goal');
                setPlanError(''); setPlanResult(null); setIsLoadingPlan(true);
                const delay = ms => new Promise(r => setTimeout(r, ms));
                const simulatedMs = Math.floor(Math.random() * 5000) + 5000; // 5-10s
                try {
                  // simulate fetch + delay
                  const fetchPromise = fetch('https://example.com/api/workout', {
                    method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(planForm)
                  }).then(async res => { if (!res.ok) throw new Error('API error'); return res.json(); });
                  const [data] = await Promise.all([fetchPromise.catch(()=>null), delay(simulatedMs)]);
                  if (data) {
                    setPlanResult({ source: 'api', generatedAt: new Date().toISOString(), data });
                  } else {
                    // local fallback building a plan from available data
                    const matched = workoutPrograms.find(w => w.title.toLowerCase().includes(planForm.goal.split('-')[0])) || workoutPrograms[Math.floor(Math.random()*workoutPrograms.length)];
                    const local = { planTitle: `${planForm.goal} Starter`, user: {...planForm}, matchedPlan: matched, schedule: { daysPerWeek: planForm.daysPerWeek || (planForm.goal==='muscle-gain' ? 5 : 4) }, sessions: matched.exercises };
                    setPlanResult({ source: 'local', generatedAt: new Date().toISOString(), data: local });
                  }
                } catch (e) {
                  await delay(simulatedMs);
                  setPlanError('Could not generate plan');
                } finally { setIsLoadingPlan(false); }
              }}>Generate Plan</button>
            </div>

            <div style={{marginTop:14}}>
              {isLoadingPlan && <p>Fetching workout plan from server — please wait...</p>}
              {planError && <div className="api-error">{planError}</div>}
              {planResult && (
                <div>
                  <div style={{fontSize:13,color:'#666',marginBottom:8}}><strong>Source:</strong> {planResult.source} — <strong>Generated:</strong> {planResult.generatedAt}</div>
                  <pre style={{color:'#000', whiteSpace:'pre-wrap', background:'#f6f8fa', padding:12, borderRadius:6, overflowX:'auto'}}>{JSON.stringify(planResult, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
        </section>
    </div>
  );
}