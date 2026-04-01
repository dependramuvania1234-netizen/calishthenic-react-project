import React, { useState } from "react";
import "./WeightLoss.css";

// Fitness Science Data
const fitnessScience = [
  {
    id: 1,
    title: "What is Progressive Overload",
    description: "The fundamental principle of muscle and strength development",
    icon: "📈",
    content: {
      explanation: "Progressive overload is the gradual increase of stress placed upon the body during exercise training. This principle is crucial for continued improvement in muscle size, strength, and endurance.",
      howItWorks: [
        "Gradually increasing weight, frequency, or number of repetitions in your strength training routine",
        "Challenging your muscles beyond their current capacity forces them to adapt and grow stronger",
        "Without progressive overload, your body adapts to current demands and progress stalls"
      ],
      application: [
        "Increase weight by 2.5-5% when you can complete all reps with good form",
        "Add 1-2 repetitions to your sets",
        "Add an additional set",
        "Decrease rest time between sets",
        "Increase training frequency"
      ],
      benefits: [
        "Continuous muscle growth",
        "Increased strength",
        "Enhanced performance",
        "Prevents plateaus"
      ]
    }
  },
  {
    id: 2,
    title: "Muscle Hypertrophy Explained",
    description: "The science behind muscle growth",
    icon: "💪",
    content: {
      explanation: "Muscle hypertrophy is the increase in the size of muscle cells, which results from resistance training and proper nutrition. It's the physiological process that makes muscles bigger and stronger.",
      types: [
        "Myofibrillar hypertrophy: Growth of muscle contractile units, increases strength",
        "Sarcoplasmic hypertrophy: Growth of fluid and energy stores in muscle cells, increases muscle size"
      ],
      mechanisms: [
        "Mechanical tension: Lifting heavy weights creates tension in muscle fibers",
        "Metabolic stress: The 'pump' from blood pooling in working muscles",
        "Muscle damage: Micro-tears in muscle fibers that repair and grow stronger"
      ],
      optimalApproach: [
        "Resistance training 3-5 times per week",
        "6-12 repetitions per set for hypertrophy",
        "60-80% of one-rep max weight",
        "Progressive overload over time",
        "Adequate protein intake (1.6-2.2g per kg body weight)"
      ]
    }
  },
  {
    id: 3,
    title: "Strength vs Size Difference",
    description: "Understanding the difference between training for strength and training for muscle size",
    icon: "⚖️",
    content: {
      explanation: "While strength and muscle size often develop together, training specifically for strength versus hypertrophy requires different approaches to reps, sets, and intensity.",
      strengthTraining: [
        "Focus on neurological adaptations",
        "Lower rep ranges (1-6 reps)",
        "Higher intensity (85-100% of 1RM)",
        "Longer rest periods (3-5 minutes)",
        "Emphasis on compound movements"
      ],
      hypertrophyTraining: [
        "Focus on muscle cell growth",
        "Moderate rep ranges (6-15 reps)",
        "Moderate intensity (65-85% of 1RM)",
        "Shorter rest periods (60-90 seconds)",
        "Mix of compound and isolation movements"
      ],
      practicalApplication: [
        "Beginners benefit from focusing on strength first",
        "Advanced lifters may periodize between strength and hypertrophy phases",
        "Power athletes prioritize strength, bodybuilders prioritize hypertrophy",
        "Most recreational lifters benefit from a mix of both approaches"
      ]
    }
  },
  {
    id: 4,
    title: "How Metabolism Works",
    description: "Understanding your body's energy system",
    icon: "🔥",
    content: {
      explanation: "Metabolism encompasses all chemical processes that occur within your body to maintain life. It determines how many calories you burn at rest and during activity.",
      components: [
        "Basal Metabolic Rate (BMR): Calories burned at complete rest (60-75% of daily expenditure)",
        "Thermic Effect of Food (TEF): Calories used to digest, absorb, and process nutrients (10% of daily expenditure)",
        "Physical Activity: Calories burned during exercise and daily movement (15-30% of daily expenditure)"
      ],
      factorsAffectingMetabolism: [
        "Body size: Larger bodies burn more calories",
        "Body composition: Muscle burns more calories than fat",
        "Age: Metabolism naturally slows with age",
        "Gender: Men typically have higher BMR than women",
        "Genetics: Some people naturally have faster or slower metabolisms"
      ],
      boostingMetabolism: [
        "Build and maintain muscle mass",
        "Stay physically active throughout the day",
        "Eat enough protein (higher TEF than carbs/fats)",
        "Get adequate sleep",
        "Manage stress (cortisol can slow metabolism)"
      ]
    }
  },
  {
    id: 5,
    title: "NEAT (Non-Exercise Activity Thermogenesis)",
    description: "The hidden calorie burner in your daily life",
    icon: "🚶",
    content: {
      explanation: "NEAT refers to the energy expended for everything we do that is not sleeping, eating, or sports-like exercise. It includes activities like walking to your car, typing, and fidgeting.",
      impact: [
        "NEAT can vary by up to 2000 calories between individuals of similar size",
        "It accounts for approximately 15-30% of total daily energy expenditure",
        "Small changes in NEAT can significantly impact weight management over time"
      ],
      increasingNEAT: [
        "Take the stairs instead of the elevator",
        "Park farther away from destinations",
        "Stand or walk while on the phone",
        "Use a standing desk or take standing breaks",
        "Fidget more (tapping feet, bouncing legs)",
        "Do household chores more vigorously"
      ],
      research: [
        "Studies show lean people tend to have higher NEAT levels",
        "When overfed, some people naturally increase NEAT to burn excess calories",
        "NEAT decreases during weight loss, making weight maintenance challenging"
      ]
    }
  },
  {
    id: 6,
    title: "DOMS (Muscle Soreness)",
    description: "Understanding delayed onset muscle soreness",
    icon: "😣",
    content: {
      explanation: "Delayed Onset Muscle Soreness (DOMS) is the muscle pain and stiffness felt 24-72 hours after new or intense exercise. It's a normal response to unusual exertion and part of the adaptation process.",
      causes: [
        "Eccentric muscle contractions (lengthening under tension)",
        "New exercises or increased intensity",
        "Microscopic damage to muscle fibers",
        "Inflammatory response to muscle damage"
      ],
      characteristics: [
        "Typically peaks 24-72 hours after exercise",
        "Affects muscles that were worked",
        "Decreases with repeated exposure to the same exercise (repeated bout effect)",
        "More common after eccentric movements (lowering weights)"
      ],
      management: [
        "Light activity or active recovery",
        "Massage or foam rolling",
        "Adequate hydration and nutrition",
        "Proper sleep",
        "Cold or heat therapy",
        "Over-the-counter pain relievers if necessary"
      ],
      prevention: [
        "Gradual progression of exercise intensity",
        "Proper warm-up before exercise",
        "Cool-down and stretching after exercise",
        "Adequate recovery between challenging sessions"
      ]
    }
  },
  {
    id: 7,
    title: "Overtraining Syndrome",
    description: "When too much exercise becomes counterproductive",
    icon: "😫",
    content: {
      explanation: "Overtraining syndrome occurs when an athlete trains beyond the body's ability to recover, leading to performance decrements and various symptoms. It's a state where more training produces worse results.",
      symptoms: [
        "Persistent fatigue and decreased performance",
        "Increased resting heart rate",
        "Mood changes: irritability, depression, anxiety",
        "Sleep disturbances",
        "Frequent illness or infections",
        "Loss of appetite",
        "Muscle soreness that doesn't improve with rest"
      ],
      causes: [
        "Too much training volume without adequate recovery",
        "Poor nutrition or hydration",
        "Inadequate sleep",
        "High life stress combined with training stress",
        "Monotonous training without variation"
      ],
      recovery: [
        "Reduce training volume and/or intensity by 40-60%",
        "Increase rest days between sessions",
        "Focus on nutrition, especially protein and carbohydrates",
        "Prioritize sleep (8-10 hours nightly)",
        "Consider active recovery like walking or gentle yoga",
        "Address other life stressors"
      ],
      prevention: [
        "Periodize training with planned deload weeks",
        "Monitor recovery metrics like heart rate variability",
        "Listen to your body and adjust training based on how you feel",
        "Ensure adequate nutrition and sleep",
        "Vary training intensity and volume"
      ]
    }
  },
  {
    id: 8,
    title: "Rest vs Recovery",
    description: "Understanding the difference between not training and actively recovering",
    icon: "🛌",
    content: {
      explanation: "While often used interchangeably, rest and recovery are different concepts. Rest is simply the absence of training, while recovery involves active processes to restore the body.",
      rest: [
        "Complete absence of physical exertion",
        "Passive process",
        "Necessary but not sufficient for optimal recovery",
        "Can lead to detraining if prolonged"
      ],
      recovery: [
        "Active process of restoring physiological and psychological capacity",
        "Includes nutrition, sleep, and active recovery methods",
        "Can occur during and between training sessions",
        "Enhances adaptation to training"
      ],
      recoveryStrategies: [
        "Sleep: 7-9 hours for most adults",
        "Nutrition: Adequate protein, carbs, and micronutrients",
        "Hydration: Replacing fluids lost during exercise",
        "Active recovery: Light activity that promotes blood flow",
        "Stress management: Meditation, breathing exercises",
        "Compression garments, ice baths, massage"
      ],
      optimalBalance: [
        "Schedule regular rest days in your training week",
        "Plan deload weeks every 4-8 weeks of training",
        "Use active recovery on light training days",
        "Prioritize sleep and nutrition around hard training sessions",
        "Listen to your body's signals for needed rest"
      ]
    }
  },
  {
    id: 9,
    title: "Why Warm-up Matters",
    description: "The science behind pre-exercise preparation",
    icon: "🔥",
    content: {
      explanation: "A proper warm-up prepares your body for exercise by increasing blood flow to muscles, raising body temperature, and mentally preparing you for activity. It reduces injury risk and improves performance.",
      physiologicalEffects: [
        "Increased muscle temperature: Improves muscle elasticity and power output",
        "Increased blood flow: Delivers more oxygen to working muscles",
        "Enhanced joint lubrication: Improves range of motion",
        "Activation of nervous system: Improves muscle recruitment patterns",
        "Hormonal changes: Prepares body for energy expenditure"
      ],
      components: [
        "General warm-up: 5-10 minutes of light cardio to raise body temperature",
        "Dynamic stretching: Movement-based stretches that mimic the exercises to follow",
        "Specific warm-up: Lighter versions of the main exercises to be performed",
        "Mental preparation: Focusing on the upcoming workout"
      ],
      effectiveWarmup: [
        "5-10 minutes of light cardio (jogging, cycling, etc.)",
        "Dynamic stretches: arm circles, leg swings, torso twists",
        "Movement-specific preparation: bodyweight squats before barbell squats",
        "Gradually increasing intensity: Start with lighter weights",
        "Avoid static stretching before intense activity (save for cool-down)"
      ],
      benefits: [
        "Reduced injury risk",
        "Improved performance",
        "Better mental preparation",
        "Decreased muscle soreness",
        "Enhanced range of motion"
      ]
    }
  }
];

// Nutrition Science Data
const nutritionScience = [
  {
    id: 1,
    title: "What Are Calories",
    description: "Understanding the energy currency of your body",
    icon: "⚡",
    content: {
      explanation: "A calorie is a unit of energy. In nutrition, calories refer to the energy people get from the food and drink they consume, and the energy they use in physical activity.",
      technicalDefinition: "One food calorie (kilocalorie) is the amount of heat needed to raise the temperature of one kilogram of water by one degree Celsius.",
      calorieBalance: [
        "Calorie surplus: Consuming more calories than you burn leads to weight gain",
        "Calorie deficit: Consuming fewer calories than you burn leads to weight loss",
        "Calorie maintenance: Consuming the same number of calories you burn maintains weight"
      ],
      factorsInfluencingNeeds: [
        "Age: Calorie needs generally decrease with age",
        "Sex: Men typically need more calories than women",
        "Body size: Larger bodies need more calories",
        "Activity level: More active people need more calories",
        "Metabolism: Individual variations in metabolic rate"
      ],
      measuringCalories: [
        "Basal Metabolic Rate (BMR): Calories burned at complete rest",
        "Total Daily Energy Expenditure (TDEE): Total calories burned in a day",
        "Metabolic equivalent (MET): A measure of energy expenditure during activities"
      ]
    }
  },
  {
    id: 2,
    title: "Calorie Deficit vs Surplus",
    description: "Understanding energy balance for body composition goals",
    icon: "⚖️",
    content: {
      explanation: "Calorie balance is the relationship between calories consumed and calories expended. This balance determines whether you gain, lose, or maintain weight.",
      calorieDeficit: [
        "Definition: Consuming fewer calories than your body burns",
        "Primary driver of weight loss",
        "Typical deficit: 300-500 calories below maintenance for sustainable fat loss",
        "Too large a deficit can lead to muscle loss and metabolic adaptation"
      ],
      calorieSurplus: [
        "Definition: Consuming more calories than your body burns",
        "Required for muscle gain (with resistance training)",
        "Typical surplus: 200-500 calories above maintenance for lean muscle gain",
        "Too large a surplus leads to excessive fat gain"
      ],
      practicalApplication: [
        "Calculate maintenance calories using TDEE formulas or tracking",
        "Adjust based on actual results (weight changes)",
        "Prioritize protein intake during deficits to preserve muscle",
        "Time surplus and deficit phases according to goals",
        "Consider cyclical approaches for body recomposition"
      ],
      commonMistakes: [
        "Underestimating calorie intake",
        "Overestimating calorie burn from exercise",
        "Making deficits too aggressive",
        "Not adjusting as body weight changes",
        "Ignoring the quality of calories consumed"
      ]
    }
  },
  {
    id: 3,
    title: "What Are Macros (Protein/Carbs/Fats)",
    description: "Understanding the three macronutrients that fuel your body",
    icon: "🍽️",
    content: {
      explanation: "Macronutrients are nutrients that provide calories or energy. The three macronutrients are carbohydrates, proteins, and fats, each serving different functions in the body.",
      proteins: [
        "Function: Building blocks for tissues, enzymes, hormones, and immune cells",
        "Calories: 4 calories per gram",
        "Sources: Meat, fish, eggs, dairy, legumes, nuts, seeds",
        "Needs: 1.6-2.2g per kg body weight for active individuals",
        "Role in fitness: Essential for muscle repair and growth"
      ],
      carbohydrates: [
        "Function: Primary energy source for the body and brain",
        "Calories: 4 calories per gram",
        "Sources: Grains, fruits, vegetables, legumes, sugars",
        "Types: Simple (fast-digesting) and complex (slow-digesting)",
        "Role in fitness: Fuels high-intensity exercise and replenishes glycogen"
      ],
      fats: [
        "Function: Energy storage, hormone production, vitamin absorption",
        "Calories: 9 calories per gram",
        "Sources: Oils, nuts, seeds, avocados, fatty fish",
        "Types: Saturated, monounsaturated, polyunsaturated (including omega-3s)",
        "Role in fitness: Supports hormone production and long-duration exercise"
      ],
      optimalDistribution: [
        "No single 'best' ratio for everyone",
        "Protein: 20-30% of total calories for active individuals",
        "Fats: 20-35% of total calories",
        "Carbohydrates: 35-55% of total calories",
        "Adjust based on goals, preferences, and activity level"
      ]
    }
  },
  {
    id: 4,
    title: "Glycemic Index",
    description: "How different carbs affect your blood sugar",
    icon: "📊",
    content: {
      explanation: "The Glycemic Index (GI) is a ranking of carbohydrates on a scale from 0 to 100 according to how much they raise blood sugar levels after eating. Foods with a high GI are rapidly digested and absorbed, resulting in marked fluctuations in blood sugar levels.",
      howItWorks: [
        "Pure glucose serves as the reference point with a GI of 100",
        "Low GI foods (55 or less): Slowly digested, absorbed, and metabolized",
        "Medium GI foods (56-69): Moderately digested, absorbed, and metabolized",
        "High GI foods (70 or more): Rapidly digested, absorbed, and metabolized"
      ],
      factorsAffectingGI: [
        "Processing: More processing = higher GI",
        "Ripeness: Riper fruits have higher GI",
        "Cooking method: Longer cooking often increases GI",
        "Food combinations: Eating with protein, fat, or fiber lowers overall GI",
        "Individual response: GI can vary between people"
      ],
      practicalImplications: [
        "Low GI foods may help with weight management by promoting satiety",
        "Low GI foods may benefit blood sugar control, especially for diabetics",
        "High GI foods can be beneficial for rapid post-workout recovery",
        "GI doesn't account for portion size (Glycemic Load does)",
        "Total carbohydrate intake is more important than GI for most people"
      ],
      examples: [
        "Low GI: Most fruits, non-starchy vegetables, legumes, whole grains",
        "Medium GI: Sweet potatoes, corn, bananas, some whole grain breads",
        "High GI: White bread, white rice, potatoes, sugary foods"
      ]
    }
  },
  {
    id: 5,
    title: "Insulin Myth",
    description: "Debunking misconceptions about insulin and fat storage",
    icon: "💉",
    content: {
      explanation: "Insulin is a hormone that regulates blood sugar by facilitating glucose uptake into cells. It's often misunderstood in popular diet culture, leading to several myths about its role in fat storage.",
      insulinFunction: [
        "Released by the pancreas in response to elevated blood glucose",
        "Signals cells to take up glucose from the bloodstream",
        "Promotes glucose storage as glycogen in liver and muscles",
        "Inhibits fat breakdown when elevated",
        "Essential for life - without insulin, cells cannot use glucose for energy"
      ],
      commonMyths: [
        "Myth: Insulin makes you fat",
        "Reality: Excess calories make you fat, insulin just facilitates storage",
        "Myth: Carbs automatically cause fat storage through insulin",
        "Reality: Protein also stimulates insulin, sometimes more than some carbs",
        "Myth: Low-carb diets work by eliminating insulin",
        "Reality: They work primarily through calorie restriction and satiety"
      ],
      insulinSensitivity: [
        "Definition: How effectively your cells respond to insulin",
        "Higher sensitivity = less insulin needed to lower blood sugar",
        "Improved by: Exercise, weight loss, adequate sleep, certain foods",
        "Reduced by: Sedentary lifestyle, excess body fat, poor diet, stress",
        "Poor sensitivity is a hallmark of type 2 diabetes"
      ],
      practicalTakeaways: [
        "Total calories determine weight gain or loss, not insulin alone",
        "Insulin management is important for blood sugar control, especially for diabetics",
        "Timing of carbs around exercise can optimize insulin response",
        "A balanced diet with fiber, protein, and healthy fats helps regulate insulin response",
        "Regular physical activity is the most effective way to improve insulin sensitivity"
      ]
    }
  },
  {
    id: 6,
    title: "Sugar vs Complex Carbs",
    description: "Understanding the difference between simple and complex carbohydrates",
    icon: "🍬",
    content: {
      explanation: "Carbohydrates are classified based on their chemical structure and how quickly they're digested and absorbed. This classification impacts blood sugar, energy levels, and health.",
      simpleCarbs: [
        "Structure: One or two sugar units (monosaccharides and disaccharides)",
        "Digestion: Rapidly broken down and absorbed",
        "Blood sugar impact: Cause quick spikes in blood glucose and insulin",
        "Sources: Table sugar, fruit juice, candy, soda, white flour products",
        "Best use: During or immediately after intense exercise for rapid energy"
      ],
      complexCarbs: [
        "Structure: Long chains of sugar units (polysaccharides)",
        "Digestion: Slower breakdown and absorption",
        "Blood sugar impact: More gradual rise in blood glucose and insulin",
        "Sources: Whole grains, legumes, vegetables, fruits with fiber",
        "Benefits: Sustained energy, better satiety, more nutrients"
      ],
      fiberConsiderations: [
        "Type of carbohydrate that cannot be digested",
        "Slows absorption of other carbs, blunting blood sugar response",
        "Promotes digestive health and feelings of fullness",
        "Recommended intake: 25-38g daily for most adults",
        "Most people don't get enough fiber in their diet"
      ],
      practicalApplication: [
        "Prioritize complex carbs for most meals and snacks",
        "Time simple carbs around workouts for performance and recovery",
        "Total carbohydrate intake matters more than type for weight management",
        "Focus on carbohydrate quality (whole food sources) over strict categorization",
        "Individual responses to different carbs can vary significantly"
      ]
    }
  },
  {
    id: 7,
    title: "Why Protein Is Important",
    description: "The crucial role of protein in health and fitness",
    icon: "🥩",
    content: {
      explanation: "Protein is a macronutrient essential for building and repairing tissues, making enzymes and hormones, and supporting immune function. It's particularly important for active individuals and those looking to change their body composition.",
      biologicalFunctions: [
        "Muscle repair and growth: Essential for recovery from exercise",
        "Enzyme production: Facilitates chemical reactions in the body",
        "Hormone creation: Many hormones are made of protein",
        "Immune function: Antibodies are proteins that fight infection",
        "Transport and storage: Moves molecules throughout the body"
      ],
      proteinForFitness: [
        "Muscle protein synthesis: Repairs damage from exercise and builds new muscle",
        "Satiety: More filling than carbs or fats, aiding weight management",
        "Thermic effect: Higher TEF than other macros, slightly boosting metabolism",
        "Preservation of lean mass during weight loss",
        "Supports recovery and adaptation to training"
      ],
      proteinSources: [
        "Complete proteins: Contain all essential amino acids (animal products, soy, quinoa)",
        "Incomplete proteins: Lack one or more essential amino acids (most plant foods)",
        "Animal sources: Meat, fish, eggs, dairy",
        "Plant sources: Legumes, nuts, seeds, grains, vegetables",
        "Supplements: Whey, casein, soy, pea, rice protein powders"
      ],
      proteinNeeds: [
        "Sedentary adults: 0.8g per kg body weight",
        "Endurance athletes: 1.2-1.4g per kg body weight",
        "Strength athletes: 1.6-2.2g per kg body weight",
        "During weight loss: Higher protein helps preserve muscle mass",
        "Distribution: 20-30g per meal maximizes muscle protein synthesis"
      ]
    }
  },
  {
    id: 8,
    title: "Why Fiber Matters",
    description: "The underrated nutrient that impacts health and body composition",
    icon: "🌾",
    content: {
      explanation: "Fiber is a type of carbohydrate that the body can't digest. It passes through the digestive system relatively intact, providing numerous health benefits despite not providing calories.",
      typesOfFiber: [
        "Soluble fiber: Dissolves in water, forms gel-like substance",
        "Insoluble fiber: Doesn't dissolve in water, adds bulk to stool",
        "Most plant foods contain both types in varying amounts",
        "Different fibers have different effects on the body"
      ],
      healthBenefits: [
        "Digestive health: Promotes regular bowel movements and prevents constipation",
        "Heart health: Helps lower cholesterol levels",
        "Blood sugar control: Slows absorption of sugar, improving glucose response",
        "Weight management: Increases satiety and reduces calorie absorption",
        "Gut health: Feeds beneficial gut bacteria, producing short-chain fatty acids"
      ],
      fiberForFitness: [
        "Improved satiety: Helps control appetite during dieting phases",
        "Better nutrient timing: Slows carb absorption, providing more sustained energy",
        "Enhanced recovery: Supports gut health, which impacts overall recovery",
        "Reduced inflammation: Certain fibers produce anti-inflammatory compounds",
        "Improved body composition: Associated with lower body fat percentage"
      ],
      increasingFiberIntake: [
        "Recommended intake: 25g for women, 38g for men daily",
        "Gradually increase intake to avoid digestive discomfort",
        "Drink plenty of water when increasing fiber",
        "Best sources: Beans, lentils, berries, whole grains, nuts, seeds",
        "Choose whole fruits over juice, whole grains over refined"
      ]
    }
  },
  {
    id: 9,
    title: "Water Retention Explained",
    description: "Understanding why your body holds onto water and how to manage it",
    icon: "💧",
    content: {
      explanation: "Water retention (edema) occurs when excess fluid builds up in your body's tissues. It can cause bloating, puffiness, and temporary weight gain, but is often misunderstood in the context of diet and fitness.",
      causesOfWaterRetention: [
        "High sodium intake: Sodium causes your body to retain water to balance concentration",
        "Hormonal fluctuations: Especially in women during menstrual cycle",
        "Dehydration: When dehydrated, your body holds onto water as a protective mechanism",
        "High carb intake: Each gram of carbohydrate stores 3-4 grams of water",
        "Intense exercise: Causes inflammation as muscles repair",
        "Certain medications and medical conditions"
      ],
      waterRetentionVsFatGain: [
        "Water retention: Appears suddenly, affects entire body, feels 'puffy'",
        "Fat gain: Gradual process, localized to some degree, doesn't cause puffiness",
        "Water weight can fluctuate 2-5 pounds daily for most people",
        "Scale weight doesn't differentiate between water and fat"
      ],
      managingWaterRetention: [
        "Stay hydrated: Paradoxically, drinking more water can reduce retention",
        "Reduce sodium intake: Aim for less than 2,300mg daily",
        "Eat potassium-rich foods: Bananas, potatoes, spinach help balance sodium",
        "Move your body: Physical activity helps circulate fluids",
        "Elevate legs if retention is in lower extremities",
        "Avoid excessive alcohol, which can dehydrate you"
      ],
      whenToBeConcerned: [
        "Sudden, severe swelling (could indicate serious medical condition)",
        "Swelling accompanied by shortness of breath or chest pain",
        "Swelling that doesn't improve with lifestyle changes",
        "Swelling in just one limb (could indicate blood clot)",
        "Persistent swelling that worsens over time"
      ]
    }
  }
];

// Psychology & Discipline Data
const psychologyDiscipline = [
  {
    id: 1,
    title: "Motivation vs Discipline",
    description: "Understanding why discipline beats motivation for long-term success",
    icon: "⚡",
    content: {
      explanation: "Motivation is the desire to do something, while discipline is the ability to do what needs to be done even when you don't feel motivated. For long-term success in fitness and life, discipline is more reliable than motivation.",
      motivationCharacteristics: [
        "Emotional and feeling-based",
        "Comes and goes in waves",
        "Often triggered by external factors",
        "Powerful but unreliable",
        "Works well for short-term bursts"
      ],
      disciplineCharacteristics: [
        "Commitment-based and action-oriented",
        "Consistent regardless of feelings",
        "Comes from internal values and goals",
        "Builds with practice over time",
        "Creates long-term sustainable change"
      ],
      buildingDiscipline: [
        "Start with ridiculously small habits",
        "Focus on consistency over intensity",
        "Create systems that don't require willpower",
        "Remove decision-making through routines",
        "Track your habits visually",
        "Never miss twice in a row"
      ],
      practicalApplication: [
        "Motivation gets you started, discipline keeps you going",
        "Use motivation when you have it, rely on discipline when you don't",
        "Build discipline in small areas first, then expand",
        "Create identity-based habits (I am someone who exercises) rather than outcome-based (I need to lose weight)",
        "Remember that discipline is like a muscle that strengthens with practice"
      ]
    }
  },
  {
    id: 2,
    title: "Habit Loop Theory",
    description: "How habits form and how to use this knowledge to your advantage",
    icon: "🔄",
    content: {
      explanation: "The habit loop is a neurological pattern that governs any habit. It consists of three elements: a cue, a routine, and a reward. Understanding this loop allows you to build good habits and break bad ones.",
      theThreeElements: [
        "Cue: Trigger that tells your brain to go into automatic mode",
        "Routine: Physical, mental, or emotional behavior itself",
        "Reward: Helps your brain figure out if this particular loop is worth remembering"
      ],
      habitExamples: [
        "Morning coffee: Cue (waking up) → Routine (making coffee) → Reward (energy boost)",
        "Checking phone: Cue (notification sound) → Routine (checking phone) → Reward (social connection)",
        "Exercise: Cue (putting on workout clothes) → Routine (exercising) → Reward (endorphins)"
      ],
      changingHabits: [
        "Keep the cue and reward, change the routine",
        "Example: Replace stress eating with stress walking",
        "Identify the craving driving the reward",
        "Experiment with different routines to find what satisfies the craving",
        "Make the new routine obvious and easy"
      ],
      habitDesignPrinciples: [
        "Make it obvious: Clear visual cues for good habits",
        "Make it attractive: Bundle habits with things you enjoy",
        "Make it easy: Reduce friction for good habits, increase it for bad ones",
        "Make it satisfying: Immediate reward for completing the habit",
        "Start small: Build momentum with tiny wins"
      ]
    }
  },
  {
    id: 3,
    title: "Dopamine & Addiction",
    description: "Understanding the brain's reward system and how it affects behavior",
    icon: "🧠",
    content: {
      explanation: "Dopamine is a neurotransmitter that plays a major role in reward-motivated behavior. It's released during pleasurable situations and stimulates you to seek out the pleasurable activity again.",
      dopamineFunction: [
        "Released in anticipation of rewards, not just when receiving them",
        "Drives motivation and goal-directed behavior",
        "Helps form habits by reinforcing rewarding behaviors",
        "Plays a role in memory, attention, and mood regulation"
      ],
      modernDopamineTriggers: [
        "Social media likes and notifications",
        "Sugar and highly processed foods",
        "Video games and streaming services",
        "Online shopping",
        "Pornography"
      ],
      dopamineAddictionCycle: [
        "Trigger: Encounter cue (phone notification, food advertisement)",
        "Behavior: Engage in dopamine-releasing activity",
        "Reward: Temporary pleasure and relief",
        "Craving: Brain wants more of the rewarding activity",
        "Tolerance: Need more of the activity for same effect"
      ],
      managingDopamine: [
        "Dopamine fasting: Periods without high-dopamine activities",
        "Building 'dopamine menu' of healthy rewards",
        "Delaying gratification to strengthen impulse control",
        "Mindfulness to observe cravings without acting",
        "Replacing unhealthy dopamine sources with healthier alternatives",
        "Creating natural dopamine through exercise, achievement, social connection"
      ]
    }
  },
  {
    id: 4,
    title: "Why Consistency Beats Intensity",
    description: "The power of showing up regularly over occasional heroics",
    icon: "📅",
    content: {
      explanation: "Consistency creates compounding effects that intensity alone cannot match. Small, regular efforts build momentum and create lasting change, while sporadic intense efforts often lead to burnout and inconsistency.",
      powerOfConsistency: [
        "Compound effect: Small actions accumulate over time",
        "Habit formation: Repetition strengthens neural pathways",
        "Reduced decision fatigue: Consistency creates automaticity",
        "Sustainable progress: Avoids burnout and injury",
        "Momentum: Each action makes the next one easier"
      ],
      intensityTrap: [
        "All-or-nothing mindset leads to doing nothing when can't do 'perfect'",
        "High intensity often leads to burnout or injury",
        "Motivation-dependent approach is unreliable",
        "Focus on outcomes rather than process",
        "Inconsistent application of high standards"
      ],
      buildingConsistency: [
        "Lower the bar: Make it easy to show up",
        "Never miss twice: Missing once is an accident, missing twice is a pattern",
        "Habit stacking: Link new habits to existing ones",
        "Environment design: Make good habits easy, bad habits hard",
        "Focus on identity: Become the type of person who is consistent",
        "Track streaks: Visual representation of consistency"
      ],
      practicalApplication: [
        "10-minute daily workout vs. 1-hour workout once a week",
        "Reading 10 pages daily vs. trying to read a book in one sitting",
        "Meditating 5 minutes daily vs. hour-long session occasionally",
        "Healthy eating most meals vs. 'perfect' eating for short periods",
        "Progressive overload: Small consistent increases in difficulty"
      ]
    }
  },
  {
    id: 5,
    title: "Why Most People Quit",
    description: "Understanding the common pitfalls that derail fitness journeys",
    icon: "🛑",
    content: {
      explanation: "Most people abandon their fitness goals within the first few months. Understanding the common reasons for quitting can help you anticipate and overcome these challenges.",
      commonReasonsForQuitting: [
        "Unrealistic expectations: Wanting results too quickly",
        "All-or-nothing mindset: One missed workout leads to giving up entirely",
        "Lack of immediate results: Discouraged when progress isn't visible",
        "Overwhelm: Trying to change too much at once",
        "Social pressure: Friends or family not supporting new habits",
        "Discomfort: Physical or psychological discomfort of change"
      ],
      expectationVsReality: [
        "Expectation: Noticeable results in 2 weeks",
        "Reality: Meaningful changes take 8-12 weeks or more",
        "Expectation: Daily motivation to exercise",
        "Reality: Motivation fluctuates, discipline is required",
        "Expectation: Linear progress",
        "Reality: Progress comes in waves with plateaus and setbacks"
      ],
      preventionStrategies: [
        "Set realistic expectations based on science",
        "Focus on process goals (exercise 3x weekly) not just outcome goals (lose 20 pounds)",
        "Plan for setbacks and have a strategy to get back on track",
        "Find enjoyable forms of exercise",
        "Build a support system or find accountability partners",
        "Track non-scale victories (energy, mood, strength improvements)"
      ],
      reframingSetbacks: [
        "View missed workouts as data, not failure",
        "Practice self-compassion when you slip up",
        "Focus on consistency over perfection",
        "Remember that progress isn't linear",
        "Use setbacks as learning opportunities to refine your approach"
      ]
    }
  },
  {
    id: 6,
    title: "Self Identity Building",
    description: "How becoming the type of person who achieves goals is more effective than focusing on goals",
    icon: "🎭",
    content: {
      explanation: "Identity-based habits focus on who you wish to become rather than what you want to achieve. When you change your identity, your behavior naturally follows, creating more sustainable change.",
      outcomeVsIdentityGoals: [
        "Outcome goal: 'I want to lose 20 pounds'",
        "Identity goal: 'I am a healthy person who makes nutritious choices'",
        "Process goal: 'I exercise 3 times per week'",
        "Identity drives process, which leads to outcome"
      ],
      buildingNewIdentity: [
        "Decide who you want to be",
        "Prove it to yourself with small wins",
        "Use evidence to reinforce your identity",
        "Make your identity public for accountability",
        "Focus on who you are, not what you want"
      ],
      identityExamples: [
        "Instead of 'I need to exercise', become 'someone who never misses a workout'",
        "Instead of 'I should eat healthier', become 'someone who makes nutritious choices'",
        "Instead of 'I have to be more disciplined', become 'someone who is reliable to themselves'",
        "Instead of 'I want to be stronger', become 'someone who trains consistently'"
      ],
      practicalApplication: [
        "Start with a small action that proves your new identity",
        "Repeat the action until it becomes part of who you are",
        "Expand your identity with related behaviors",
        "Use your identity to guide decisions when motivation wanes",
        "Remember that every action is a vote for the type of person you want to become"
      ]
    }
  },
  {
    id: 7,
    title: "Delayed Gratification",
    description: "The superpower that separates successful people from those who struggle",
    icon: "⏳",
    content: {
      explanation: "Delayed gratification is the ability to resist the temptation of an immediate reward in preference for a later, often more valuable reward. It's a key predictor of success in many areas of life.",
      scienceBehindIt: [
        "Marshmallow experiment: Children who could wait for two marshmallows had better life outcomes",
        "Prefrontal cortex: Brain region responsible for impulse control and future planning",
        "Neuroplasticity: Can be strengthened with practice like a muscle",
        "Dopamine regulation: Training your brain to value future rewards more"
      ],
      benefitsOfDelayedGratification: [
        "Better health outcomes (choosing exercise over comfort)",
        "Financial success (saving vs. spending)",
        "Stronger relationships (investing time vs. immediate gratification)",
        "Skill development (practice vs. entertainment)",
        "Goal achievement (sticking to process vs. quitting)"
      ],
      developingDelayedGratification: [
        "Start small: Wait 10 minutes before checking your phone",
        "Use implementation intentions: 'If X happens, I will do Y'",
        "Visualize future success to make it more concrete",
        "Remove temptations when willpower is low",
        "Practice mindfulness to observe urges without acting",
        "Track the benefits of your delayed gratification"
      ],
      practicalApplication: [
        "Fitness: Choosing workout over Netflix",
        "Nutrition: Preparing healthy food instead of ordering takeout",
        "Finance: Saving money instead of impulse buying",
        "Skills: Practicing instead of scrolling social media",
        "Relationships: Having difficult conversations instead of avoiding conflict"
      ]
    }
  },
  {
    id: 8,
    title: "Growth Mindset",
    description: "How your beliefs about ability determine your success",
    icon: "🌱",
    content: {
      explanation: "A growth mindset is the belief that abilities and intelligence can be developed through dedication and hard work. This contrasts with a fixed mindset, which believes abilities are innate and unchangeable.",
      fixedVsGrowthMindset: [
        "Fixed mindset: 'I'm just not good at exercise'",
        "Growth mindset: 'I can improve my fitness with practice'",
        "Fixed mindset: 'I failed, so I should give up'",
        "Growth mindset: 'I failed, so I need to try a different approach'",
        "Fixed mindset: Avoids challenges to prevent failure",
        "Growth mindset: Seeks challenges as opportunities to grow"
      ],
      developingGrowthMindset: [
        "Recognize your fixed mindset voice",
        "Reframe challenges as opportunities",
        "Focus on process and effort, not just outcomes",
        "Embrace 'yet' - 'I can't do this... yet'",
        "View criticism as valuable feedback",
        "Find inspiration in others' success rather than feeling threatened"
      ],
      applyingToFitness: [
        "Instead of 'I'm not flexible', try 'I'm working on my flexibility'",
        "Instead of 'I'm weak', try 'I'm building my strength'",
        "Instead of 'I failed at this diet', try 'This approach didn't work for me'",
        "Instead of 'I'll never be able to lift that much', try 'I'll work up to it gradually'",
        "Instead of 'I'm not a gym person', try 'I'm learning to enjoy exercise'"
      ],
      benefitsOfGrowthMindset: [
        "Greater resilience in face of setbacks",
        "More enjoyment of the learning process",
        "Higher achievement in the long run",
        "Better relationships with coaches and mentors",
        "Reduced anxiety about performance"
      ]
    }
  }
];

// Body Mechanisms Data
const bodyMechanisms = [
  {
    id: 1,
    title: "How Heart Rate Works",
    description: "Understanding your body's cardiovascular response to exercise",
    icon: "❤️",
    content: {
      explanation: "Heart rate is the number of times your heart beats per minute. It's a key indicator of cardiovascular health and exercise intensity, responding to various internal and external factors.",
      howHeartRateIsControlled: [
        "Autonomic nervous system: Sympathetic (increases) and parasympathetic (decreases)",
        "Hormones: Adrenaline and noradrenaline increase heart rate",
        "Body temperature: Higher temperature increases heart rate",
        "Hydration status: Dehydration increases heart rate",
        "Emotional state: Stress, excitement, or anxiety can increase heart rate"
      ],
      heartRateZones: [
        "Resting (50-60% max): Light activity, warm-up, cool-down",
        "Fat burn (60-70% max): Moderate intensity, primarily uses fat for fuel",
        "Cardio (70-80% max): Moderate to high intensity, improves cardiovascular fitness",
        "Peak (80-90% max): High intensity, improves performance",
        "Maximum (90-100% max): All-out effort, sustainable for very short periods"
      ],
      measuringHeartRate: [
        "Manual: Count beats for 30 seconds and multiply by 2",
        "Chest strap monitors: Most accurate for exercise",
        "Wrist-based devices: Convenient but less accurate during intense exercise",
        "Fitness trackers: Provide estimates and trends over time"
      ],
      practicalApplications: [
        "Use heart rate zones to target specific training adaptations",
        "Track resting heart rate as an indicator of fitness and recovery",
        "Monitor heart rate variability (HRV) for deeper insights into recovery",
        "Use heart rate recovery (how quickly it drops after exercise) as a fitness indicator",
        "Consider individual variations in maximum heart rate (220-age is just an estimate)"
      ]
    }
  },
  {
    id: 2,
    title: "VO2 Max",
    description: "The gold standard measure of cardiovascular fitness",
    icon: "🫁",
    content: {
      explanation: "VO2 max is the maximum amount of oxygen your body can utilize during intense exercise. It's considered the best indicator of cardiovascular endurance and aerobic fitness.",
      whatItMeasures: [
        "Maximum oxygen consumption: Measured in milliliters of oxygen per kilogram of body weight per minute (mL/kg/min)",
        "Cardiovascular efficiency: How well your heart, lungs, and blood vessels work together",
        "Aerobic capacity: Your ability to sustain aerobic exercise over time",
        "Endurance potential: Higher VO2 max generally means better endurance performance"
      ],
      factorsInfluencingVO2Max: [
        "Genetics: Accounts for approximately 50% of VO2 max variation",
        "Training: Can improve VO2 max by 10-20% with proper training",
        "Age: Typically peaks in the 20s and declines with age",
        "Sex: Men generally have higher VO2 max than women due to differences in body composition and hemoglobin",
        "Altitude: Higher altitude reduces VO2 max due to lower oxygen availability"
      ],
      improvingVO2Max: [
        "High-intensity interval training (HIIT): Most effective method for improvement",
        "Long, slow distance training: Builds aerobic base",
        "Tempo runs/threshold training: Improves lactate threshold",
        "Hill training: Increases strength and efficiency",
        "Consistency: Regular training is key to maintaining and improving VO2 max"
      ],
      practicalApplications: [
        "Higher VO2 max associated with better health outcomes and longevity",
        "Can be estimated using fitness watches or field tests (12-minute run test, etc.)",
        "Training zones can be based on percentages of VO2 max",
        "Improvements in VO2 max correlate with improved race performance in endurance events",
        "VO2 max declines with detraining, but can be regained with renewed training"
      ]
    }
  },
  {
    id: 3,
    title: "How Breathing Affects Performance",
    description: "The science behind proper breathing during exercise",
    icon: "🌬️",
    content: {
      explanation: "Breathing is more than just getting oxygen—it directly impacts your performance, recovery, and even mental state during exercise. Proper breathing techniques can significantly enhance your fitness results.",
      breathingBasics: [
        "Diaphragmatic breathing: Using your diaphragm rather than chest muscles",
        "Nasal breathing: Filters, warms, and humidifies air; increases nitric oxide production",
        "Rhythmic breathing: Coordinating breath with movement",
        "Controlled exhalation: Longer exhales activate the parasympathetic nervous system"
      ],
      breathingForDifferentExercises: [
        "Cardio: Rhythmic breathing, approximately 2 steps inhale, 2 steps exhale",
        "Strength training: Exhale during exertion (concentric phase), inhale during relaxation (eccentric phase)",
        "Yoga: Coordinated breath with movement, often ujjayi breathing technique",
        "High-intensity intervals: Focus on forceful exhalation during work periods",
        "Running: Nasal breathing for easy runs, mouth breathing for high intensity"
      ],
      breathingTechniques: [
        "Box breathing: 4-count inhale, 4-count hold, 4-count exhale, 4-count hold",
        "Diaphragmatic breathing: Expanding belly rather than chest when inhaling",
        "1:2 breathing: Exhale twice as long as inhale for relaxation",
        "Wim Hof method: Specific breathing pattern combined with cold exposure",
        "Buteyko breathing: Reducing breathing volume to improve oxygen utilization"
      ],
      benefitsOfProperBreathing: [
        "Improved oxygen delivery to working muscles",
        "Better core stability and bracing for heavy lifts",
        "Reduced heart rate and perceived exertion",
        "Enhanced focus and mental clarity",
        "Faster recovery between sets and workouts",
        "Reduced stress and improved parasympathetic tone"
      ]
    }
  },
  {
    id: 4,
    title: "How Posture Affects Health",
    description: "The surprising impact of how you hold your body",
    icon: "🧍",
    content: {
      explanation: "Posture is the position in which you hold your body while standing, sitting, or lying down. Good posture involves training your body to stand, walk, sit, and lie in positions where the least strain is placed on supporting muscles and ligaments.",
      anatomyOfGoodPosture: [
        "Spinal alignment: Natural curves of the spine maintained",
        "Shoulder position: Back and down, not rounded forward",
        "Head position: Aligned with spine, not jutting forward",
        "Core engagement: Light abdominal activation",
        "Even weight distribution: Weight balanced on both feet"
      ],
      healthImpactsOfPoorPosture: [
        "Back pain: Increased strain on spine and muscles",
        "Headaches: Tension in neck and shoulder muscles",
        "Reduced lung capacity: Compressed diaphragm limits breathing",
        "Digestive issues: Compressed organs can impede function",
        "Fatigue: Muscles work harder to support poor alignment",
        "Mood effects: Upright posture associated with confidence and reduced depression"
      ],
      postureAndExercise: [
        "Proper form requires good posture as foundation",
        "Poor posture limits range of motion and exercise effectiveness",
        "Imbalanced posture creates muscle imbalances and injury risk",
        "Certain exercises (deadlifts, rows) can improve posture",
        "Core training essential for maintaining good posture during exercise"
      ],
      improvingPosture: [
        "Ergonomic adjustments to work and home environments",
        "Regular movement breaks from static positions",
        "Targeted exercises: Rows, pull-ups, back extensions",
        "Stretching tight muscles: Chest, hip flexors, hamstrings",
        "Strengthening weak muscles: Upper back, glutes, core",
        "Mindfulness and body awareness practices"
      ]
    }
  },
  {
    id: 5,
    title: "How Hormones Affect Fat Loss",
    description: "The endocrine system's role in body composition",
    icon: "🧪",
    content: {
      explanation: "Hormones are chemical messengers that regulate numerous bodily functions, including metabolism, hunger, and fat storage. Understanding how they work can help optimize your fat loss efforts.",
      keyFatLossHormones: [
        "Insulin: Promotes fat storage, inhibits fat breakdown",
        "Leptin: Satiety hormone, signals fullness to brain",
        "Ghrelin: Hunger hormone, stimulates appetite",
        "Cortisol: Stress hormone, can promote abdominal fat storage",
        "Thyroid hormones: Regulate metabolic rate",
        "Growth hormone: Promotes fat burning and muscle building"
      ],
      insulinAndFatStorage: [
        "High insulin levels promote fat storage",
        "Insulin resistance makes fat loss more difficult",
        "Carbohydrate quality and quantity affect insulin response",
        "Exercise improves insulin sensitivity",
        "Timing of carbs around exercise can optimize insulin response"
      ],
      cortisolAndBellyFat: [
        "Chronic stress elevates cortisol levels",
        "Cortisol specifically promotes visceral (abdominal) fat storage",
        "High cortisol can increase appetite and cravings",
        "Stress management techniques can help lower cortisol",
        "Overtraining can elevate cortisol, counteracting fat loss efforts"
      ],
      optimizingHormonesForFatLoss: [
        "Balanced diet with adequate protein, fiber, and healthy fats",
        "Regular exercise, especially strength training",
        "Adequate sleep (7-9 hours for most people)",
        "Stress management through meditation, breathing, or other techniques",
        "Avoiding extreme dieting that can disrupt hormone balance",
        "Consider hormonal factors unique to your situation (age, sex, health conditions)"
      ]
    }
  },
  {
    id: 6,
    title: "Testosterone Basics",
    description: "Understanding the primary male sex hormone and its impact on fitness",
    icon: "💪",
    content: {
      explanation: "Testosterone is the primary male sex hormone, though it's present in both sexes. It plays a crucial role in muscle mass, bone density, fat distribution, and red blood cell production.",
      functionsOfTestosterone: [
        "Muscle growth: Stimulates protein synthesis and muscle tissue growth",
        "Bone health: Increases bone density and strength",
        "Fat distribution: Affects where fat is stored in the body",
        "Red blood cell production: Increases oxygen-carrying capacity",
        "Libido and sexual function: Primary driver of sex drive in men",
        "Mood and energy: Influences motivation, confidence, and energy levels"
      ],
      factorsAffectingTestosterone: [
        "Age: Naturally declines with age, about 1% per year after 30",
        "Body fat: Higher body fat, especially abdominal fat, lowers testosterone",
        "Exercise: Resistance training can temporarily boost testosterone",
        "Sleep: Poor sleep significantly reduces testosterone levels",
        "Nutrition: Adequate calories, healthy fats, and zinc support testosterone",
        "Stress: Chronic stress elevates cortisol, which suppresses testosterone"
      ],
      testosteroneAndFitness: [
        "Higher testosterone supports muscle growth and strength gains",
        "Optimal levels improve recovery and exercise performance",
        "Resistance training is the most effective way to boost testosterone naturally",
        "Overtraining can lower testosterone by increasing cortisol",
        "Compound movements (squats, deadlifts) are most effective for boosting testosterone"
      ],
      optimizingTestosterone: [
        "Resistance training 3-4 times per week",
        "Adequate sleep (7-9 hours)",
        "Healthy body fat levels (10-15% for men)",
        "Balanced diet with adequate calories and healthy fats",
        "Stress management techniques",
        "Limiting alcohol consumption",
        "Ensuring adequate intake of zinc, vitamin D, and magnesium"
      ]
    }
  },
  {
    id: 7,
    title: "Cortisol (Stress Hormone)",
    description: "Understanding how stress impacts your body and fitness goals",
    icon: "😰",
    content: {
      explanation: "Cortisol is a steroid hormone produced by the adrenal glands. It's often called the 'stress hormone' because it's released in response to stress and low blood-glucose concentration.",
      cortisolFunctions: [
        "Regulates metabolism: Controls how body converts fats, proteins, and carbohydrates to energy",
        "Inflammation control: Has anti-inflammatory effects",
        "Blood pressure regulation: Helps maintain blood pressure",
        "Blood sugar regulation: Increases glucose availability",
        "Sleep-wake cycle: Helps regulate circadian rhythms",
        "Stress response: Part of the 'fight or flight' response"
      ],
      acuteVsChronicCortisol: [
        "Acute: Short-term elevation is adaptive and helpful",
        "Chronic: Prolonged elevation has negative health effects",
        "Acute: Improves energy and focus during stress",
        "Chronic: Can lead to health problems and hinder fitness goals"
      ],
      cortisolAndFitness: [
        "Elevated cortisol can promote muscle breakdown (catabolism)",
        "High cortisol can impair recovery and adaptation to training",
        "Cortisol specifically promotes abdominal fat storage",
        "Overtraining chronically elevates cortisol, counteracting progress",
        "Proper periodization helps manage cortisol levels"
      ],
      managingCortisol: [
        "Adequate sleep: 7-9 hours per night for most people",
        "Stress management: Meditation, deep breathing, yoga",
        "Balanced training: Avoid chronic overtraining",
        "Nutrition: Adequate carbohydrates, especially around training",
        "Recovery strategies: Saunas, massage, relaxation techniques",
        "Limiting caffeine, especially in the afternoon and evening"
      ]
    }
  },
  {
    id: 8,
    title: "Sleep Hormones (Melatonin)",
    description: "How your body's sleep chemistry affects recovery and performance",
    icon: "🌙",
    content: {
      explanation: "Melatonin is a hormone primarily released by the pineal gland that regulates sleep-wake cycles. It's often called the 'hormone of darkness' as its production is inhibited by light.",
      melatoninFunctions: [
        "Regulates circadian rhythms: Controls sleep-wake cycles",
        "Antioxidant properties: Protects cells from damage",
        "Immune support: Enhances immune function",
        "Temperature regulation: Slightly lowers body temperature during sleep",
        "Blood pressure regulation: Helps lower nighttime blood pressure"
      ],
      melatoninProduction: [
        "Light sensitive: Production inhibited by light, especially blue light",
        "Circadian rhythm: Naturally rises in evening, peaks in middle of night",
        "Age-related: Production decreases with age",
        "Individual variation: Some people naturally produce more or less"
      ],
      sleepAndFitness: [
        "Muscle recovery: Most muscle repair and growth occurs during sleep",
        "Hormone regulation: Sleep balances cortisol, growth hormone, and testosterone",
        "Energy restoration: Replenishes energy stores for next day's training",
        "Mental function: Sleep consolidates motor learning and skill acquisition",
        "Injury prevention: Fatigue from poor sleep increases injury risk"
      ],
      optimizingMelatoninAndSleep: [
        "Light exposure: Bright light in morning, avoid bright light in evening",
        "Blue light management: Use blue light filters or avoid screens 1-2 hours before bed",
        "Consistent schedule: Same bedtime and wake time, even on weekends",
        "Sleep environment: Cool, dark, quiet room for optimal sleep",
        "Pre-sleep routine: Relaxing activities to signal bedtime to body",
        "Consider supplementation if needed, but prioritize natural methods first"
      ]
    }
  }
];

// Myths vs Facts Data
const mythsVsFacts = [
  {
    id: 1,
    title: "Eating Every 2 Hours",
    description: "The myth that frequent meals boost metabolism",
    icon: "⏰",
    content: {
      myth: "You must eat every 2 hours to keep your metabolism high and prevent muscle loss.",
      fact: "Total daily calories and macronutrients matter more than meal frequency for metabolism and body composition.",
      explanation: [
        "Metabolic rate is determined by total calories, muscle mass, and activity level",
        "Thermic Effect of Food (TEF) is proportional to total calories consumed, not meal frequency",
        "Studies show no difference in weight loss between 3 meals and 6+ meals with same calories",
        "Personal preference and lifestyle should determine meal frequency"
      ],
      whenFrequentMealsMayHelp: [
        "Better appetite control for some people",
        "More manageable portions for those who overeat at large meals",
        "Better energy levels for some individuals",
        "May help with adherence to specific nutrition plans"
      ],
      whenFewerMealsMayBeBetter: [
        "Intermittent fasting protocols",
        "Those who prefer larger, more satisfying meals",
        "Simplified meal planning and preparation",
        "Extended periods without food may have some metabolic benefits"
      ],
      practicalTakeaway: "Choose meal frequency based on personal preference, lifestyle, and what helps you consistently meet your nutritional goals."
    }
  },
  {
    id: 2,
    title: "Supplements Are Mandatory",
    description: "The truth about supplements in fitness and nutrition",
    icon: "💊",
    content: {
      myth: "You need supplements to build muscle, lose fat, or achieve fitness goals.",
      fact: "Supplements are optional additions to a solid nutrition and training foundation, not requirements.",
      explanation: [
        "The supplement industry is largely unregulated with exaggerated claims",
        "Most supplements have minimal effects compared to proper nutrition and training",
        "A few supplements have solid research behind them for specific purposes",
        "Food should always be the primary source of nutrients"
      ],
      supplementsWithEvidence: [
        "Protein powder: Convenient way to meet protein needs",
        "Creatine: Most researched supplement, improves strength and performance",
        "Caffeine: Proven to enhance performance and focus",
        "Vitamin D: Important if you have low levels (common in many regions)",
        "Omega-3 fatty acids: Anti-inflammatory benefits, important for overall health"
      ],
      supplementsOftenOverhyped: [
        "Fat burners: Minimal effect compared to calorie deficit",
        "Testosterone boosters: Most have little impact on healthy young men",
        "Pre-workouts: Often just caffeine with unnecessary ingredients",
        "Weight loss pills: No magic pills exist for sustainable fat loss",
        "Most 'muscle building' supplements: Protein and calories are what actually build muscle"
      ],
      practicalTakeaway: "Focus on nutrition, training, and recovery first. Consider only evidence-based supplements to address specific needs or preferences."
    }
  },
  {
    id: 3,
    title: "Women Lifting Gets Bulky",
    description: "Debunking the fear that strength training makes women bulky",
    icon: "🏋️‍♀️",
    content: {
      myth: "Women who lift weights will get bulky and look masculine.",
      fact: "Women have significantly less testosterone than men, making it much harder to build large muscles. Strength training typically creates a toned, athletic appearance.",
      explanation: [
        "Testosterone is the primary hormone for muscle building",
        "Men have 10-15 times more testosterone than women",
        "Female bodybuilders who look 'bulky' train specifically for that look for years, often with pharmaceutical assistance",
        "Most women lack the hormonal profile to build large muscles naturally"
      ],
      benefitsOfStrengthTrainingForWomen: [
        "Increased metabolic rate: More muscle burns more calories at rest",
        "Improved body composition: More muscle, less fat for a toned appearance",
        "Bone density: Resistance training is the best way to prevent osteoporosis",
        "Functional strength: Makes daily activities easier",
        "Confidence and empowerment: Physical strength builds mental strength",
        "Improved insulin sensitivity: Better blood sugar control"
      ],
      whatActuallyCreates : [
        "Excess calories, not strength training itself",
        "Specific high-volume training programs designed for hypertrophy",
        "Genetic predisposition to muscle building",
        "In some cases, anabolic substances"
      ],
      practicalTakeaway: "Women should embrace strength training as an essential component of fitness for health, aesthetics, and function without fear of becoming 'bulky'."
    }
  },
  {
    id: 4,
    title: "Sweating Equals Fat Loss",
    description: "Understanding the relationship between sweating and fat burning",
    icon: "💦",
    content: {
      myth: "The more you sweat, the more fat you're burning.",
      fact: "Sweating is your body's cooling mechanism, not an indicator of fat burning. You can burn significant calories without sweating much, and sweat heavily without burning much fat.",
      explanation: [
        "Sweat is primarily water with small amounts of electrolytes",
        "Weight lost through sweating is water weight, quickly regained when rehydrating",
        "Fat burning happens through creating a calorie deficit over time",
        "Some people naturally sweat more than others regardless of effort"
      ],
      whatSweatingActuallyIndicates: [
        "Body temperature regulation: Sweating cools your body during exercise",
        "Fitness level: Fitter people often start sweating sooner during exercise",
        "Environment: Hot and humid conditions cause more sweating",
        "Genetics: Some people are simply 'sweatier' than others",
        "Hydration status: Dehydrated people may sweat less"
      ],
      actualFatBurningIndicators: [
        "Calorie deficit over time: The only way to lose fat",
        "Heart rate zones: Moderate intensity (not necessarily highest intensity) often burns more fat",
        "Consistent exercise: Regular activity increases overall calorie burn",
        "Muscle mass: More muscle increases resting metabolic rate",
        "Duration and intensity: Total work done matters more than sweat produced"
      ],
      practicalTakeaway: "Focus on creating a sustainable calorie deficit through nutrition and exercise rather than trying to maximize sweating. Stay hydrated during workouts regardless of how much you sweat."
    }
  },
  {
    id: 5,
    title: "Carbs Make You Fat",
    description: "The truth about carbohydrates and body weight",
    icon: "🍞",
    content: {
      myth: "Carbohydrates, especially bread and pasta, make you gain weight.",
      fact: "Excess calories from any source cause weight gain. Carbohydrates are the body's preferred energy source and can be part of a healthy diet for weight management.",
      explanation: [
        "Weight gain is caused by consistently consuming more calories than you burn",
        "Carbohydrates contain 4 calories per gram, same as protein and less than fat (9 calories/gram)",
        "Quality of carbohydrates matters more than total amount",
        "Many cultures with high-carb diets have low obesity rates"
      ],
      carbohydrateQualityDistinction: [
        "Refined carbs: White bread, pastries, sugary drinks - often low in nutrients and fiber",
        "Whole carbs: Vegetables, fruits, whole grains, legumes - nutrient-dense with fiber",
        "The same number of calories from different carb sources can have different effects on satiety and health"
      ],
      whenCarbsMightContributeToWeightGain: [
        "Easy to overeat: Palatable foods often high in refined carbs and fats",
        "Low satiety: Some refined carbs don't keep you full as long as protein or fiber",
        "Blood sugar spikes: Can lead to crashes that trigger more eating",
        "Liquid calories: Sugary drinks don't trigger fullness signals like solid food"
      ],
      practicalTakeaway: "Focus on total calorie balance and choose high-quality, fiber-rich carbohydrates most of the time. Carbs themselves don't cause weight gain—excess calories do."
    }
  },
  {
    id: 6,
    title: "Fat Makes You Fat",
    description: "The misunderstood role of dietary fat in body composition",
    icon: "🥑",
    content: {
      myth: "Eating fat makes you fat. You should choose low-fat foods for weight loss.",
      fact: "Dietary fat is essential for health and can support weight management. Like any calorie source, excess fat can contribute to weight gain, but moderate amounts are important for optimal function.",
      explanation: [
        "Weight gain results from excess calories, not specific macronutrients",
        "Fats are calorie-dense (9 calories/gram vs 4 for protein/carbs), which can lead to overconsumption",
        "Fats are essential for hormone production, vitamin absorption, and cell function",
        "Low-fat diets often replace fat with sugar, which can be worse for health and weight"
      ],
      essentialRolesOfDietaryFat: [
        "Hormone production: Including testosterone and estrogen",
        "Vitamin absorption: Fat-soluble vitamins A, D, E, K require fat",
        "Cell membrane structure: All cells contain fat",
        "Brain health: The brain is approximately 60% fat",
        "Satiety: Fats can increase feelings of fullness"
      ],
      healthyVsUnhealthyFats: [
        "Healthy fats: Monounsaturated (olive oil, avocados) and polyunsaturated (nuts, seeds, fish)",
        "Unhealthy fats: Excess saturated fat and artificial trans fats",
        "Omega-3 fatty acids: Particularly important for reducing inflammation",
        "Quality matters more than quantity for most people"
      ],
      practicalTakeaway: "Include moderate amounts of healthy fats in your diet for optimal health and satiety. Focus on total calorie balance rather than eliminating entire macronutrient groups."
    }
  },
  {
    id: 7,
    title: "No Pain, No Gain",
    description: "Understanding the difference between productive discomfort and harmful pain",
    icon: "😣",
    content: {
      myth: "Effective workouts must be painful. If you're not sore, you're not making progress.",
      fact: "While some discomfort during exercise is normal, pain is often a sign of injury or overtraining. Effective training challenges you without causing harm.",
      explanation: [
        "Muscle soreness (DOMS) results from microscopic muscle damage, not necessarily muscle growth",
        "Pain during exercise is different from muscle fatigue or burning sensation",
        "Consistent training reduces soreness even as fitness improves",
        "Overtraining can cause pain that actually hinders progress"
      ],
      productiveDiscomfortVsHarmfulPain: [
        "Productive: Muscle fatigue, burning sensation in muscles, mild soreness 24-48 hours after workout",
        "Harmful: Sharp, stabbing pain, pain in joints, pain that persists or worsens",
        "Productive: Symmetrical soreness in muscles that were worked",
        "Harmful: Asymmetrical pain, pain in areas not targeted by exercise"
      ],
      whenSorenessIndicatesProgress: [
        "When introducing new exercises or increasing intensity",
        "During the first few weeks of a new program",
        "After particularly challenging sessions",
        "When focusing on eccentric (lowering) phases of movements"
      ],
      whenPainIndicatesProblems: [
        "Pain that interferes with daily activities",
        "Pain that doesn't improve with rest",
        "Joint pain rather than muscle soreness",
        "Pain that changes your movement patterns",
        "Progressively worsening pain with repeated activity"
      ],
      practicalTakeaway: "Learn to distinguish between productive discomfort and harmful pain. Progress comes from consistent, challenging training—not from pushing through pain."
    }
  },
  {
    id: 8,
    title: "More Gym Time = Better Results",
    description: "Why more isn't always better in fitness",
    icon: "⏱️",
    content: {
      myth: "The more time you spend in the gym, the better and faster your results will be.",
      fact: "Training quality and consistency matter more than quantity. Overtraining can actually hinder progress and increase injury risk.",
      explanation: [
        "Adaptation happens during recovery, not during training itself",
        "Diminishing returns: After a certain point, more training yields less benefit",
        "Recovery is essential for muscle growth and strength gains",
        "Overtraining syndrome can reverse progress and harm health"
      ],
      optimalTrainingVolume: [
        "Beginners: 2-3 full-body sessions per week",
        "Intermediate: 3-4 sessions targeting different muscle groups",
        "Advanced: 4-5 sessions with planned variation and recovery",
        "Quality over quantity: Focused, intense sessions often better than long, distracted ones"
      ],
      signsOfOvertraining: [
        "Persistent fatigue and performance decrements",
        "Increased resting heart rate",
        "Mood changes: irritability, depression",
        "Sleep disturbances",
        "Frequent illness or injuries",
        "Loss of motivation and enjoyment"
      ],
      practicalTakeaway: "Focus on training smart with adequate recovery. More gym time doesn't necessarily equal better results—consistent, quality training with proper recovery does."
    }
  }
];

// Supplements Education Data
const supplementsEducation = [
  {
    id: 1,
    title: "Whey Protein Explained",
    description: "The science behind the most popular fitness supplement",
    icon: "🥛",
    content: {
      explanation: "Whey protein is a complete protein derived from milk during the cheese-making process. It's popular among athletes and fitness enthusiasts due to its high biological value and rapid digestion.",
      typesOfWheyProtein: [
        "Whey Concentrate: 70-80% protein, contains some fat and lactose, most economical",
        "Whey Isolate: 90%+ protein, minimal fat and lactose, more expensive",
        "Whey Hydrolysate: Predigested for faster absorption, most expensive, can taste bitter",
        "Native Whey: Less processed, directly from milk, higher in bioactive compounds"
      ],
      benefitsOfWheyProtein: [
        "Complete amino acid profile: Contains all essential amino acids",
        "High in BCAAs: Particularly leucine, which triggers muscle protein synthesis",
        "Rapid digestion: Absorbed quickly, making it ideal post-workout",
        "Convenient: Easy to consume quickly after training",
        "Research-supported: Numerous studies support its effectiveness for muscle building"
      ],
      whoBenefitsMost: [
        "Athletes and strength trainers with high protein needs",
        "People struggling to meet protein needs through food alone",
        "Those needing convenient post-workout nutrition",
        "Individuals with increased protein requirements (older adults, vegetarians)"
      ],
      whoMightNotNeedIt: [
        "People meeting protein needs through whole foods",
        "Those with dairy allergies or lactose intolerance (though isolate may be tolerated)",
        "Individuals with kidney issues (should consult healthcare provider)",
        "People on a tight budget (whole food protein sources may be more economical)"
      ],
      practicalConsiderations: [
        "Timing: Most effective within 2 hours post-workout, but total daily intake matters most",
        "Dosage: 20-40g typically sufficient for most people",
        "Quality matters: Third-party testing ensures purity and accurate labeling",
        "Not magic: Works only when combined with proper training and adequate total calories"
      ]
    }
  },
  {
    id: 2,
    title: "Creatine Science",
    description: "The most researched supplement in fitness history",
    icon: "💪",
    content: {
      explanation: "Creatine is a compound naturally produced in the body from amino acids. It's stored primarily in muscles and helps regenerate ATP, the primary energy currency of cells. Supplementing increases muscle creatine stores beyond normal levels.",
      howCreatineWorks: [
        "Increases phosphocreatine stores: Enhances energy production during short, intense efforts",
        "Improves ATP regeneration: Allows for more work before fatigue",
        "Cell volumization: Draws water into muscle cells, increasing size",
        "May enhance protein synthesis: Through cell signaling pathways",
        "May reduce myostatin: A protein that limits muscle growth"
      ],
      provenBenefits: [
        "Increased strength: Particularly in short-duration, high-intensity efforts",
        "Improved muscle mass: When combined with resistance training",
        "Enhanced performance: In activities requiring repeated bursts of effort",
        "Faster recovery: Between bouts of high-intensity exercise",
        "Cognitive benefits: Some research suggests improved brain function"
      ],
      whoBenefitsMost: [
        "Strength and power athletes",
        "Vegetarians (lower natural creatine stores)",
        "Older adults (combating age-related muscle loss)",
        "People engaging in high-intensity interval training"
      ],
      safetyAndSideEffects: [
        "Extensively studied with excellent safety profile",
        "Most common side effect: Water retention and weight gain",
        "May cause stomach issues in some individuals (split doses can help)",
        "No evidence of kidney damage in healthy individuals at recommended doses",
        "Long-term studies (5+ years) show no adverse effects"
      ],
      practicalUsage: [
        "Loading phase (optional): 20g/day divided into 4 doses for 5-7 days",
        "Maintenance phase: 3-5g daily thereafter",
        "Timing less important than consistency: Can be taken any time of day",
        "Creatine monohydrate is the most researched and effective form",
        "Take with carbohydrates to enhance uptake (insulin-mediated)"
      ]
    }
  },
  {
    id: 3,
    title: "Caffeine Performance Effect",
    description: "How the world's most popular drug impacts exercise",
    icon: "☕",
    content: {
      explanation: "Caffeine is a natural stimulant that affects the central nervous system. It's the most widely used psychoactive substance globally and has well-documented effects on physical and mental performance.",
      howCaffeineWorks: [
        "Adenosine antagonism: Blocks adenosine receptors, reducing fatigue",
        "Epinephrine release: Increases adrenaline production",
        "Dopamine modulation: Increases dopamine activity, improving mood and focus",
        "Calcium release: Enhances muscle contraction capability",
        "Glycogen sparing: May help preserve glycogen stores during exercise"
      ],
      performanceBenefits: [
        "Endurance: Improves time to exhaustion in aerobic activities",
        "Strength: May increase maximal force production",
        "Power: Enhances explosive efforts like jumps and sprints",
        "Focus: Improves concentration and reduces perceived effort",
        "Fat metabolism: May increase fat utilization during exercise"
      ],
      optimalDosing: [
        "3-6mg per kg body weight for performance benefits",
        "Most effects peak 60 minutes after consumption",
        "Effects last 3-5 hours in most individuals",
        "Genetics influence caffeine metabolism (fast vs. slow metabolizers)",
        "Tolerance develops with regular use"
      ],
      potentialSideEffects: [
        "Anxiety and jitters: Particularly in sensitive individuals",
        "Sleep disruption: Especially when consumed late in the day",
        "Digestive issues: Some people experience stomach upset",
        "Dependency: Withdrawal symptoms can occur with regular use",
        "Increased heart rate and blood pressure: Usually temporary and mild"
      ],
      practicalApplication: [
        "Time caffeine consumption 60 minutes before key workouts",
        "Consider cycling off periodically to maintain sensitivity",
        "Be mindful of total daily intake from all sources",
        "Individual response varies significantly - find your optimal dose",
        "Avoid caffeine within 6-8 hours of bedtime for most people"
      ]
    }
  },
  {
    id: 4,
    title: "Pre-Workout Truth",
    description: "What's really in those colorful powders",
    icon: "🌈",
    content: {
      explanation: "Pre-workout supplements are multi-ingredient formulations designed to enhance exercise performance. They typically contain stimulants, performance-enhancing compounds, and ingredients for the 'pump' sensation.",
      commonIngredientsAndEffects: [
        "Caffeine: Primary stimulant for energy and focus",
        "Beta-alanine: Buffers acid in muscles, reducing fatigue",
        "Citrulline: Increases nitric oxide, enhancing blood flow and 'pump'",
        "Creatine: Improves strength and power output",
        "Betaine: May enhance power output and muscular endurance",
        "Tyrosine: May improve focus during stressful conditions"
      ],
      provenBenefits: [
        "Increased energy: Primarily from caffeine",
        "Enhanced focus: From stimulants and nootropics",
        "Improved endurance: Particularly from beta-alanine and caffeine",
        "Better 'pump': From citrulline and other nitric oxide boosters",
        "Reduced perceived effort: Making exercise feel easier"
      ],
      potentialDownsides: [
        "Proprietary blends: Hides exact amounts of ingredients",
        "Excessive stimulants: Can cause jitters, anxiety, or crash",
        "Tolerance buildup: Requires higher doses over time",
        "Cost: Often expensive for what you're actually getting",
        "Regulation issues: Industry not well-regulated, quality varies"
      ],
      whoMightBenefit: [
        "Those training early morning when energy is low",
        "Advanced athletes seeking marginal performance gains",
        "People who have hit plateaus and need a boost",
        "Individuals who struggle with workout energy or focus"
      ],
      practicalAlternatives: [
        "Black coffee or caffeine alone: Most effective ingredient anyway",
        "Proper nutrition: Carbs before workout for energy",
        "Good hydration: Dehydration significantly impairs performance",
        "Adequate sleep: The ultimate performance enhancer",
        "Individual ingredients: More control and better value than pre-mixed formulas"
      ]
    }
  },
  {
    id: 5,
    title: "Fat Burners Myth",
    description: "The truth about pills and powders promising rapid fat loss",
    icon: "🔥",
    content: {
      explanation: "Fat burners are supplements claiming to increase fat metabolism, reduce fat absorption, or increase weight loss. They typically contain stimulants, herbal extracts, and various compounds with limited research support.",
      commonFatBurnerIngredients: [
        "Caffeine: Mild thermogenic effect and appetite suppression",
        "Green tea extract: Contains EGCG and caffeine, modest metabolic effect",
        "Cayenne pepper: Capsaicin may slightly increase metabolism",
        "L-carnitine: Theoretically helps transport fat for energy, limited evidence",
        "Yohimbine: May aid fat loss in specific circumstances, significant side effects",
        "Various herbal extracts: Often with minimal human research"
      ],
      whatTheScienceSays: [
        "Minimal effects: Most ingredients produce only small metabolic increases",
        "Placebo effect: Much of perceived benefit may be psychological",
        "Short-term effects: Any benefits typically diminish with continued use",
        "Diet and exercise dominate: Fat burners are at best 5% of the equation",
        "Regulation issues: Many products don't contain what they claim"
      ],
      potentialRisks: [
        "Stimulant side effects: Anxiety, jitters, increased heart rate",
        "Liver damage: Some products have been linked to liver injury",
        "Unregulated ingredients: May contain prohibited or dangerous substances",
        "False hope: May distract from proven methods of fat loss",
        "Expense: Often costly for minimal benefit"
      ],
      effectiveAlternatives: [
        "Calorie deficit: The only proven way to lose fat",
        "Protein intake: Higher protein preserves muscle and increases thermogenesis",
        "Strength training: Builds muscle that increases metabolism",
        "NEAT: Non-exercise activity can significantly increase daily calorie burn",
        "Sleep: Poor sleep disrupts hormones that regulate appetite and fat storage"
      ],
      practicalTakeaway: "Save your money. Focus on creating a sustainable calorie deficit through nutrition and exercise. If you do try a fat burner, view it as a potential minor boost, not a solution."
    }
  },
  {
    id: 6,
    title: "Multivitamins Reality",
    description: "Do you really need that daily pill?",
    icon: "💊",
    content: {
      explanation: "Multivitamins are supplements containing many different vitamins and minerals, typically at levels close to the Recommended Dietary Allowance. They're designed to prevent nutritional deficiencies in the general population.",
      whoMightBenefit: [
        "People with restricted diets (vegans, those with food allergies)",
        "Pregnant women (specific prenatal formulations)",
        "Elderly individuals with reduced appetite or absorption",
        "People with malabsorption conditions (Crohn's disease, celiac disease)",
        "Those on weight loss diets with restricted food variety"
      ],
      whatTheResearchShows: [
        "Generally safe for most people at recommended doses",
        "Limited evidence for disease prevention in well-nourished populations",
        "May reduce cancer risk in some studies, but results are mixed",
        "No clear benefit for cardiovascular disease prevention",
        "Some studies suggest potential harm in certain populations"
      ],
      potentialRisks: [
        "Nutrient interactions: High doses of one nutrient can interfere with others",
        "False sense of security: May lead to poorer food choices",
        "Excess intake: Fat-soluble vitamins (A, D, E, K) can accumulate to toxic levels",
        "Masking deficiencies: Can correct blood levels while tissue deficiency remains",
        "Interactions with medications: Can affect drug effectiveness"
      ],
      foodVsSupplements: [
        "Synergy: Nutrients in food work together in ways supplements can't replicate",
        "Phytochemicals: Plants contain beneficial compounds not found in supplements",
        "Better absorption: Many nutrients are better absorbed from food sources",
        "Fiber and other benefits: Foods provide nutrients plus other health benefits",
        "Cost effectiveness: Nutrient-dense foods often more economical than supplements"
      ],
      practicalApproach: [
        "Food first approach: Prioritize a varied, nutrient-dense diet",
        "Targeted supplementation: Address specific deficiencies rather than general use",
        "Blood testing: Identify actual deficiencies before supplementing",
        "Periodic use: Consider during periods of dietary restriction or increased need",
        "Quality matters: Choose third-party tested brands if you do supplement"
      ]
    }
  }
];

// Beginner Guides Data
const beginnerGuides = [
  {
    id: 1,
    title: "How to Start Gym",
    description: "Everything you need to know before your first workout",
    icon: "🏋️",
    content: {
      explanation: "Starting a gym routine can be intimidating, but with proper preparation and knowledge, you can begin your fitness journey with confidence and avoid common beginner mistakes.",
      beforeYouStart: [
        "Health check: Consult with a healthcare provider before beginning any new exercise program",
        "Set realistic goals: Specific, measurable, achievable, relevant, time-bound (SMART) goals",
        "Schedule assessment: Determine how many days per week you can realistically commit",
        "Budget consideration: Gym membership, equipment, and potential personal training costs",
        "Find the right gym: Location, equipment, hours, and atmosphere that fits your needs"
      ],
      firstVisitPreparation: [
        "Appropriate attire: Comfortable, breathable clothing and supportive athletic shoes",
        "Essential items: Water bottle, towel, lock, and gym bag",
        "Arrive early: Allow time for tour, paperwork, and orientation if needed",
        "Basic nutrition: Light meal or snack 1-2 hours before workout",
        "Hydration: Start well-hydrated, but don't overdo it immediately before"
      ],
      gymEtiquette: [
        "Rerack weights: Return all equipment to its proper place",
        "Wipe down equipment: Use provided spray or wipes to clean after use",
        "Share equipment: Allow others to work in between your sets",
        "Respect space: Be mindful of others' personal space and workout flow",
        "Ask for help: Most gym-goers are happy to assist or offer a spot"
      ],
      firstWorkoutApproach: [
        "Focus on form: Proper technique is more important than weight or intensity",
        "Full-body routine: Work all major muscle groups in each session initially",
        "Machine exercises: Start with machines that guide proper form before free weights",
        "Listen to your body: Some muscle soreness is normal, but pain is not",
        "Start conservative: It's better to finish feeling you could have done more"
      ]
    }
  },
  {
    id: 2,
    title: "How to Build Routine",
    description: "Creating a sustainable workout schedule that works for you",
    icon: "📅",
    content: {
      explanation: "A well-structured workout routine is the foundation of consistent progress. The best routine is one you can stick with long-term while progressively challenging your body.",
      determiningFrequency: [
        "Beginner: 2-3 full-body workouts per week on non-consecutive days",
        "Intermediate: 3-4 workouts per week, possibly with split routines",
        "Advanced: 4-6 workouts per week with planned variation",
        "Consider lifestyle: Work, family, and social commitments",
        "Recovery needs: Age, stress levels, and sleep quality affect recovery capacity"
      ],
      workoutStructures: [
        "Full-body: Work all major muscle groups in each session (ideal for beginners)",
        "Upper/lower split: Alternate between upper body and lower body days",
        "Push/pull/legs: Group muscles by movement patterns",
        "Body part split: Focus on 1-2 muscle groups per session (advanced)",
        "Time-based: 30-minute full-body circuits for time efficiency"
      ],
      exerciseSelection: [
        "Compound movements: Multi-joint exercises that work multiple muscles",
        "Movement patterns: Push, pull, squat, hinge, carry, rotation",
        "Balance: Include exercises for all major muscle groups",
        "Variety: Prevent boredom and address different aspects of fitness",
        "Progression: Plan how you'll make exercises more challenging over time"
      ],
      schedulingStrategies: [
        "Calendar blocking: Schedule workouts like appointments",
        "Habit stacking: Link exercise to existing habits (e.g., after work)",
        "Preparation: Lay out clothes and prepare gym bag the night before",
        "Backup plans: Have home workout options for when you can't make it to the gym",
        "Flexibility: Allow for life's interruptions without derailing your routine"
      ]
    }
  },
  {
    id: 3,
    title: "How to Track Progress",
    description: "Measuring what matters to stay motivated and make adjustments",
    icon: "📊",
    content: {
      explanation: "Tracking progress provides motivation, helps identify what's working, and allows for program adjustments. Effective tracking goes beyond just the number on the scale.",
      performanceMetrics: [
        "Strength: Amount of weight lifted for key exercises",
        "Endurance: Time or distance for cardio activities",
        "Flexibility: Range of motion measurements or specific flexibility tests",
        "Consistency: Percentage of planned workouts completed",
        "Technique: Videos or coaching feedback on exercise form"
      ],
      bodyCompositionMeasurements: [
        "Scale weight: Weigh weekly at same time, same day, same conditions",
        "Progress photos: Take monthly in same lighting and poses",
        "Body measurements: Waist, hips, chest, arms, thighs with tape measure",
        "Body fat percentage: Calipers, bioimpedance, or DEXA if available",
        "Clothing fit: How specific clothes fit and feel"
      ],
      trackingMethods: [
        "Workout journal: Record exercises, sets, reps, and weights",
        "Fitness apps: Many available with exercise libraries and progress tracking",
        "Photos and videos: Visual documentation of form and progress",
        "Body measurements: Regular measurements with consistent technique",
        "Performance tests: Standardized tests repeated periodically"
      ],
      usingYourData: [
        "Look for trends: Progress isn't linear, focus on overall direction",
        "Adjust programming: Use data to identify what's working and what isn't",
        "Celebrate non-scale victories: Increased energy, better sleep, improved mood",
        "Set new goals: Use achievements as motivation for new challenges",
        "Recognize plateaus: Normal parts of progress that require strategy changes"
      ]
    }
  },
  {
    id: 4,
    title: "How to Choose Weights",
    description: "Selecting the right resistance to maximize results and minimize injury risk",
    icon: "🏋️",
    content: {
      explanation: "Choosing the right weight is crucial for effective training. Too light won't stimulate adaptation, while too heavy increases injury risk and compromises form.",
      determiningAppropriateWeight: [
        "Form first: Choose a weight that allows perfect form for all repetitions",
        "Rep range: Select weight that brings you close to failure at target rep range",
        "RPE scale: Rate of Perceived Exertion of 7-8/10 for most training",
        "Last two reps: Should be challenging but still maintain good form",
        "Progressive overload: Plan to increase weight when current becomes too easy"
      ],
      testingYourStrength: [
        "Warm up properly before testing",
        "Start with conservative estimate and adjust up or down",
        "Focus on controlled movement, not momentum",
        "Have a spotter for heavy compound exercises",
        "Record your results for future reference"
      ],
      progressionStrategies: [
        "Double progression: Increase reps first, then weight",
        "Small increments: Increase by 2.5-5% when progressing",
        "Periodic testing: Reassess your strength every 4-8 weeks",
        "Accessory work: Use lighter weights for higher reps on isolation exercises",
        "Auto-regulation: Adjust based on daily energy and performance levels"
      ],
      commonMistakes: [
        "Ego lifting: Using too much weight to impress others",
        "Progressing too quickly: Increasing weight before ready",
        "Not progressing: Staying with same weights for too long",
        "Poor form: Sacrificing technique for heavier weights",
        "Ignoring asymmetries: Not addressing strength imbalances"
      ]
    }
  },
  {
    id: 5,
    title: "How to Avoid Injuries",
    description: "Staying safe and consistent in your fitness journey",
    icon: "🚑",
    content: {
      explanation: "Injuries can derail progress and damage motivation. Most gym injuries are preventable with proper technique, appropriate progression, and smart training practices.",
      injuryPreventionPrinciples: [
        "Proper warm-up: Prepare your body for the specific demands of your workout",
        "Correct technique: Prioritize form over weight or intensity",
        "Appropriate progression: Increase demands gradually",
        "Balanced training: Work all muscle groups and movement patterns",
        "Adequate recovery: Allow sufficient time between intense sessions"
      ],
      commonGymInjuries: [
        "Lower back strain: Often from poor lifting technique",
        "Shoulder impingement: Frequently from overuse or poor form",
        "Knee pain: Often from improper alignment or excessive volume",
        "Muscle strains: Typically from inadequate warm-up or too much weight",
        "Tendonitis: Usually from overuse or poor technique"
      ],
      warningSigns: [
        "Sharp pain: Different from muscle fatigue or burning",
        "Asymmetrical pain: Pain on one side but not the other",
        "Pain that persists: Doesn't improve with rest",
        "Joint pain: Particularly in knees, shoulders, or lower back",
        "Pain that affects daily activities: Outside of normal muscle soreness"
      ],
      recoveryStrategies: [
        "Listen to your body: Don't push through pain",
        "Active recovery: Light activity promotes blood flow and healing",
        "Proper nutrition: Adequate protein and calories support tissue repair",
        "Quality sleep: Essential for recovery and injury prevention",
        "Professional help: Consult physical therapists or doctors for persistent issues"
      ]
    }
  },
  {
    id: 6,
    title: "How to Stay Consistent",
    description: "Building habits that last beyond initial motivation",
    icon: "🔄",
    content: {
      explanation: "Consistency is the key to long-term fitness success. Building sustainable habits requires strategies that work when motivation is low and life gets busy.",
      habitFormationPrinciples: [
        "Start small: Begin with habits so easy you can't say no",
        "Never miss twice: Missing once is an accident, missing twice is a pattern",
        "Habit stacking: Link new habits to existing ones",
        "Environment design: Make good habits easy and bad habits hard",
        "Identity-based habits: Focus on who you want to become"
      ],
      consistencyStrategies: [
        "Schedule workouts: Put them in your calendar like appointments",
        "Prepare in advance: Lay out clothes, pack gym bag, prep food",
        "Find enjoyable activities: You're more likely to stick with what you enjoy",
        "Accountability: Work out with a partner or share your goals with others",
        "Track your consistency: Visual representation of your commitment"
      ],
      overcomingObstacles: [
        "Time constraints: Shorter, more frequent workouts when time is limited",
        "Low motivation: Have a minimum viable workout (10-15 minutes) for low-energy days",
        "Travel: Bodyweight routines or hotel gym workouts when away from home",
        "Life stress: Adjust intensity and focus on consistency during stressful periods",
        "Plateaus: Have strategies ready for when progress stalls"
      ],
      longTermThinking: [
        "Focus on systems, not just goals: Build processes that ensure progress",
        "Embrace imperfection: Some workouts will be better than others",
        "Seasonal adjustments: Expect and plan for natural fluctuations in motivation",
        "Celebrate consistency: Acknowledge showing up as a victory in itself",
        "Remember your 'why': Reconnect with your deeper reasons for fitness"
      ]
    }
  }
];

// Advanced Guides Data
const advancedGuides = [
  {
    id: 1,
    title: "Periodization Training",
    description: "Systematically planning your training for optimal results",
    icon: "📈",
    content: {
      explanation: "Periodization is the systematic planning of athletic or physical training. It involves progressive cycling of various aspects of a training program during a specific period of time to bring about peak performance.",
      periodizationPrinciples: [
        "Progressive overload: Gradually increasing stress over time",
        "Specificity: Training adaptations specific to the type of stress applied",
        "Reversibility: Gains are lost when training stops (detraining)",
        "Individuality: Programs should be tailored to individual responses",
        "Variation: Preventing adaptation and plateaus through variation"
      ],
      periodizationModels: [
        "Linear periodization: Gradual increase in intensity with decrease in volume",
        "Undulating periodization: Frequent changes in intensity and volume",
        "Block periodization: Focusing on specific fitness qualities in sequence",
        "Concurrent periodization: Training multiple qualities simultaneously",
        "Auto-regulatory periodization: Adjusting training based on daily readiness"
      ],
      trainingPhases: [
        "Preparation: General and specific preparation for upcoming training",
        "Base: Building aerobic foundation and movement patterns",
        "Strength: Focusing on maximal strength and power development",
        "Peak/Competition: Tapering volume while maintaining intensity",
        "Transition/Recovery: Active recovery and planning for next cycle"
      ],
      practicalApplication: [
        "Annual planning: Map out your training year with key goals",
        "Mesocycles: 4-6 week blocks focusing on specific adaptations",
        "Microcycles: Weekly training plans with specific focuses",
        "Daily adjustments: Based on recovery, stress, and performance",
        "Testing and evaluation: Regular assessments to guide progression"
      ]
    }
  },
  {
    id: 2,
    title: "Deload Weeks",
    description: "Strategic recovery for long-term progress",
    icon: "🛌",
    content: {
      explanation: "A deload is a planned period of reduced training volume and/or intensity. It allows for physical and psychological recovery while maintaining fitness adaptations.",
      whyDeload: [
        "Physical recovery: Allows muscles, joints, and nervous system to recover",
        "Injury prevention: Reduces cumulative fatigue and overuse injury risk",
        "Mental refreshment: Prevents burnout and maintains motivation",
        "Supercompensation: Recovery followed by training can lead to new performance levels",
        "Plateau breaking: Provides a new stimulus when returning to normal training"
      ],
      deloadStrategies: [
        "Volume reduction: Decrease sets or reps while maintaining intensity",
        "Intensity reduction: Decrease weight while maintaining volume",
        "Frequency reduction: Reduce number of training days",
        "Exercise selection: Focus on technique or use less demanding variations",
        "Complete rest: For very intense training blocks or when overly fatigued"
      ],
      timingDeloads: [
        "Scheduled: Every 4-8 weeks regardless of fatigue level",
        "Autoregulated: When performance decreases or fatigue accumulates",
        "Post-competition: After major events or peak performance periods",
        "Life stress: During periods of high non-training stress",
        "Seasonal: During busy work periods or holidays"
      ],
      deloadGuidelines: [
        "Reduce volume by 40-60% for most people",
        "Maintain or slightly reduce intensity (weight)",
        "Focus on technique and movement quality",
        "Address any nagging issues or imbalances",
        "Plan the return to normal training to avoid overdoing it"
      ]
    }
  },
  {
    id: 3,
    title: "Training Volume vs Intensity",
    description: "Balancing the key variables for optimal progress",
    icon: "⚖️",
    content: {
      explanation: "Training volume (total work done) and intensity (how hard you work) are the primary variables that determine training outcomes. Finding the right balance is key to achieving specific goals.",
      volumeDefined: [
        "Sets × reps × weight = total volume",
        "Volume is the primary driver of hypertrophy (muscle growth)",
        "Higher volume generally leads to more muscle growth up to a point",
        "Volume tolerance is individual and develops over time",
        "Too much volume can lead to overtraining and injury"
      ],
      intensityDefined: [
        "Percentage of one-rep max (1RM)",
        "Rate of Perceived Exertion (RPE): Subjective measure of effort",
        "Intensity is the primary driver of strength and power development",
        "Higher intensity requires more recovery time",
        "Intensity and volume are inversely related in programming"
      ],
      goalSpecificBalance: [
        "Strength: Higher intensity, moderate volume (5×5, 3×3)",
        "Hypertrophy: Moderate intensity, higher volume (3×8-12)",
        "Endurance: Lower intensity, high volume (3×15-20)",
        "Power: High intensity, low volume (5×3 with explosive intent)",
        "Fat loss: Moderate to high intensity with moderate volume"
      ],
      practicalApplication: [
        "Beginners: Focus on technique with moderate intensity and volume",
        "Intermediate: Gradually increase both volume and intensity over time",
        "Advanced: Periodize focus between volume and intensity phases",
        "Fatigue management: Monitor recovery to adjust volume and intensity",
        "Individual response: Track how you respond to different combinations"
      ]
    }
  },
  {
    id: 4,
    title: "RPE Scale",
    description: "Using subjective feedback to optimize training",
    icon: "🎯",
    content: {
      explanation: "The Rate of Perceived Exertion (RPE) scale is a subjective measure of exercise intensity. It allows you to quantify how hard a workout feels, helping to auto-regulate training based on daily readiness.",
      rpeScales: [
        "Borg Scale: 6-20 scale where 6 is no exertion and 20 is maximal exertion",
        "1-10 Scale: More intuitive for most people, where 1 is very easy and 10 is maximum effort",
        "Modified CR10 Scale: Similar to 1-10 but with more specific descriptors",
        "Reps in Reserve (RIR): How many more reps you could have done with good form",
        "Percentage-based: Estimating RPE based on percentage of 1RM"
      ],
      usingRPEInTraining: [
        "Auto-regulation: Adjust training based on daily readiness",
        "Intensity management: Target specific RPE ranges for different adaptations",
        "Volume control: Limit total reps at high RPE to prevent overtraining",
        "Progression: Increase weight when RPE decreases for same reps",
        "Deload timing: Plan deloads when RPE is consistently high"
      ],
      rpeGuidelines: [
        "RPE 7-8: Most productive range for strength and hypertrophy",
        "RPE 9-10: For testing strength or occasional maximal efforts",
        "RPE 5-6: For deloads, technique work, or active recovery",
        "RPE consistency: Aim for similar RPE across all sets of an exercise",
        "Exercise-specific RPE: Some exercises naturally feel harder than others"
      ],
      practicalApplication: [
        "Track RPE in your training log alongside weights and reps",
        "Use RPE to decide when to increase weight",
        "Adjust training based on RPE trends over time",
        "Combine RPE with objective measures for best results",
        "Develop self-awareness of your effort levels through regular RPE use"
      ]
    }
  },
  {
    id: 5,
    title: "Reps in Reserve",
    description: "A more intuitive approach to training intensity",
    icon: "🔢",
    content: {
      explanation: "Reps in Reserve (RIR) refers to how many more repetitions you could have performed with proper form at the end of a set. It's an alternative to percentage-based training that auto-regulates intensity based on daily readiness.",
      rirVsPercentage: [
        "RIR 3-4: Approximately 70-75% of 1RM",
        "RIR 2-3: Approximately 80-85% of 1RM",
        "RIR 1-2: Approximately 85-90% of 1RM",
        "RIR 0-1: Approximately 90-100% of 1RM",
        "Individual variation exists based on exercise and experience level"
      ],
      benefitsOfRIR: [
        "Auto-regulation: Automatically adjusts for daily fluctuations in strength",
        "Technique focus: Ensures form doesn't break down from excessive fatigue",
        "Injury prevention: Reduces risk of training to failure too frequently",
        "Progressive overload: Natural progression as strength increases",
        "Mind-muscle connection: Encourages focusing on the working muscle"
      ],
      rirForDifferentGoals: [
        "Hypertrophy: RIR 1-3 for most working sets",
        "Strength: RIR 0-2 for main compound movements",
        "Power: RIR 2-3 to maintain speed and technique",
        "Endurance: RIR 3-5 for higher rep ranges",
        "Technique work: RIR 4-5 to focus on movement quality"
      ],
      practicalApplication: [
        "Estimate RIR based on how many more reps you feel you could do",
        "Track RIR in your training log alongside weights and reps",
        "Aim for consistent RIR across all sets of an exercise",
        "Increase weight when RIR is higher than target for target reps",
        "Use RIR to decide when to take deloads or reduce intensity"
      ]
    }
  },
  {
    id: 6,
    title: "Plateau Breaking Strategies",
    description: "Overcoming stagnation in your training progress",
    icon: "🧱",
    content: {
      explanation: "Training plateaus are periods where progress stalls despite consistent training. Breaking through plateaus requires strategic changes to your training program.",
      identifyingPlateaus: [
        "Strength plateau: No increase in weights for 3-4 weeks",
        "Hypertrophy plateau: No change in measurements for 6-8 weeks",
        "Performance plateau: No improvement in specific performance metrics",
        "Motivation plateau: Loss of enthusiasm for training",
        "Recovery plateau: Feeling constantly fatigued despite rest"
      ],
      plateauBreakingStrategies: [
        "Change exercises: Stimulate muscles in new ways",
        "Adjust volume: Increase or decrease total training volume",
        "Modify intensity: Train heavier or lighter than usual",
        "Vary rep ranges: Target different muscle fiber types",
        "Change training split: Alter how you organize your workouts"
      ],
      advancedTechniques: [
        "Drop sets: Continue with lighter weight after reaching failure",
        "Supersets: Perform two exercises back-to-back without rest",
        "Cluster sets: Break sets into smaller clusters with brief rest",
        "Eccentric focus: Emphasize the lowering portion of movements",
        "Isometric holds: Add static holds at specific points in movements"
      ],
      nonTrainingFactors: [
        "Nutrition: Ensure adequate protein and calories for your goals",
        "Sleep: Prioritize 7-9 hours of quality sleep",
        "Stress management: High cortisol can impede progress",
        "Recovery techniques: Contrast showers, massage, stretching",
        "Mental approach: Sometimes a mental break reignites progress"
      ]
    }
  }
];

// Mental Education Data
const mentalEducation = [
  {
    id: 1,
    title: "What is Stress",
    description: "Understanding the body's response to challenges",
    icon: "😰",
    content: {
      explanation: "Stress is the body's response to pressure from a particular situation or event. It can be a physical, emotional, or psychological reaction. While often viewed negatively, some stress is normal and can even be beneficial.",
      typesOfStress: [
        "Acute stress: Short-term stress that resolves quickly (e.g., deadline, traffic)",
        "Chronic stress: Prolonged stress that persists over time (e.g., difficult job, caregiving)",
        "Eustress: Positive stress that can be motivating (e.g., excitement before competition)",
        "Distress: Negative stress that can be harmful to health and well-being"
      ],
      stressResponse: [
        "Alarm stage: Initial 'fight or flight' response with adrenaline release",
        "Resistance stage: Body adapts to the stressor and attempts to return to normal",
        "Exhaustion stage: Prolonged stress depletes resources, leading to burnout",
        "Recovery: With stressor removed, body returns to baseline (if resources allow)"
      ],
      physicalEffects: [
        "Increased heart rate and blood pressure",
        "Faster breathing and muscle tension",
        "Digestive system slowdown",
        "Immune system suppression with chronic stress",
        "Hormonal changes (cortisol, adrenaline)"
      ],
      managingStress: [
        "Identify stressors: Recognize what specifically causes you stress",
        "Problem-focused coping: Address the source of stress when possible",
        "Emotion-focused coping: Manage emotional response when stressor can't be changed",
        "Relaxation techniques: Deep breathing, meditation, progressive muscle relaxation",
        "Physical activity: Exercise reduces stress hormones and releases endorphins"
      ]
    }
  },
  {
    id: 2,
    title: "How Anxiety Works",
    description: "The science behind worry and fear",
    icon: "😟",
    content: {
      explanation: "Anxiety is a normal reaction to stress characterized by feelings of fear, apprehension, and worry. While occasional anxiety is a normal part of life, anxiety disorders involve excessive, persistent worry that interferes with daily activities.",
      anxietyVsFear: [
        "Fear: Response to a specific, immediate threat",
        "Anxiety: Anticipation of future threats, often vague or uncertain",
        "Fear: Short-lived and resolves when threat passes",
        "Anxiety: Can persist even without immediate threat",
        "Both: Involve similar physical responses and brain activation patterns"
      ],
      howAnxietyWorks: [
        "Amygdala: Brain's threat detection center becomes overactive",
        "Prefrontal cortex: Rational thinking brain has reduced control over amygdala",
        "Neurotransmitters: Imbalances in serotonin, norepinephrine, GABA",
        "Genetic factors: Some people are genetically predisposed to anxiety",
        "Environmental factors: Learned behaviors and experiences can trigger anxiety"
      ],
      physicalSymptoms: [
        "Rapid heartbeat and breathing",
        "Sweating and trembling",
        "Muscle tension and aches",
        "Digestive issues and nausea",
        "Fatigue and sleep disturbances"
      ],
      managingAnxiety: [
        "Breathing techniques: Slow, deep breathing activates relaxation response",
        "Grounding techniques: 5-4-3-2-1 method brings focus to present moment",
        "Cognitive strategies: Challenge anxious thoughts and reframe them",
        "Regular exercise: Reduces anxiety symptoms over time",
        "Professional help: Therapy, medication, or both for clinical anxiety"
      ]
    }
  },
  {
    id: 3,
    title: "Cognitive Distortions",
    description: "Common thinking patterns that fuel negative emotions",
    icon: "🧠",
    content: {
      explanation: "Cognitive distortions are biased ways of thinking that are usually inaccurate and negatively biased. These thought patterns often reinforce negative emotions and behaviors, creating a self-perpetuating cycle.",
      commonDistortions: [
        "All-or-nothing thinking: Seeing things in black-and-white categories",
        "Overgeneralization: Making broad conclusions based on single events",
        "Mental filter: Focusing exclusively on negative details",
        "Disqualifying the positive: Rejecting positive experiences",
        "Jumping to conclusions: Making negative interpretations without evidence",
        "Magnification/minimization: Exaggerating negatives and minimizing positives",
        "Emotional reasoning: Assuming feelings reflect reality",
        "'Should' statements: Motivating with 'shoulds' leading to guilt",
        "Labeling: Attaching negative labels to self or others",
        "Personalization: Blaming self for events outside of control"
      ],
      howDistortionsDevelop: [
        "Learned patterns: Often developed in childhood or formative experiences",
        "Protective function: May have served a purpose at some point",
        "Reinforcement: Strengthened each time they're 'confirmed' by experience",
        "Automatic nature: Become so habitual they're not consciously recognized",
        "Emotional reinforcement: The feelings they create seem to validate them"
      ],
      challengingDistortions: [
        "Identify the distortion: Name the specific thinking pattern",
        "Examine evidence: Look for contradictory evidence to the thought",
        "Alternative explanations: Consider other possible interpretations",
        "Decatastrophizing: Question the worst-case scenario and its likelihood",
        "Double standard: Would you judge others the same way?",
        "Survey method: Ask others for their perspective on the situation"
      ],
      practicalApplication: [
        "Thought records: Track situations, thoughts, emotions, and alternative thinking",
        "Socratic questioning: Systematically challenge distorted thoughts",
        "Behavioral experiments: Test the validity of anxious predictions",
        "Mindfulness: Observe thoughts without judgment or engagement",
        "Professional help: Cognitive-behavioral therapy specifically targets these patterns"
      ]
    }
  },
  {
    id: 4,
    title: "Emotional Regulation",
    description: "Skills for managing your emotional responses",
    icon: "⚖️",
    content: {
      explanation: "Emotional regulation is the ability to effectively manage and respond to an emotional experience. It involves recognizing, understanding, and modulating your emotions to achieve positive outcomes.",
      componentsOfEmotionalRegulation: [
        "Awareness: Recognizing emotions as they arise",
        "Understanding: Identifying the causes and functions of emotions",
        "Acceptance: Allowing emotions without judgment",
        "Modulation: Adjusting emotional intensity as needed",
        "Recovery: Returning to baseline after emotional experiences"
      ],
      regulationStrategies: [
        "Situation selection: Choosing or avoiding situations based on emotional impact",
        "Situation modification: Changing aspects of situations to alter emotional impact",
        "Attentional deployment: Redirecting attention within a situation",
        "Cognitive change: Changing how you think about a situation",
        "Response modulation: Directly influencing physiological, experiential, or behavioral responses"
      ],
      specificTechniques: [
        "Deep breathing: Activates parasympathetic nervous system",
        "Progressive muscle relaxation: Reduces physical tension",
        "Mindfulness: Non-judgmental awareness of present moment",
        "Cognitive reappraisal: Reframing situations to change emotional impact",
        "Expressive writing: Processing emotions through journaling",
        "Physical activity: Releasing and transforming emotional energy"
      ],
      developingEmotionalRegulation: [
        "Emotional vocabulary: Developing language to describe specific emotions",
        "Emotional awareness: Regular check-ins to identify current emotional state",
        "Trigger identification: Recognizing specific situations that trigger strong emotions",
        "Coping toolbox: Developing a range of strategies for different situations",
        "Practice: Regularly using techniques to build skills and automaticity"
      ]
    }
  },
  {
    id: 5,
    title: "Mindfulness Explained",
    description: "The practice of present-moment awareness without judgment",
    icon: "🧘",
    content: {
      explanation: "Mindfulness is the psychological process of bringing one's attention to experiences occurring in the present moment without judgment. It's developed through the practice of meditation and other training.",
      keyComponents: [
        "Present-moment awareness: Focus on here and now rather than past or future",
        "Non-judgment: Observing thoughts and feelings without labeling them good or bad",
        "Acceptance: Allowing experiences to be as they are without trying to change them",
        "Non-attachment: Observing thoughts come and go without getting carried away",
        "Beginner's mind: Approaching experiences with fresh perspective"
      ],
      mindfulnessMechanisms: [
        "Attention regulation: Strengthening ability to direct and sustain attention",
        "Body awareness: Enhanced interoceptive awareness of bodily sensations",
        "Emotion regulation: Improved ability to observe emotions without reacting",
        "Self-awareness: Greater understanding of thought patterns and behaviors",
        "Neuroplasticity: Physical changes in brain regions related to attention and emotion"
      ],
      benefitsOfMindfulness: [
        "Reduced stress and anxiety: Lower cortisol and improved stress response",
        "Improved focus: Enhanced ability to sustain attention",
        "Emotional regulation: Better management of emotional responses",
        "Relationship satisfaction: More present and attentive interactions",
        "Physical health: Lower blood pressure, improved immune function"
      ],
      developingMindfulness: [
        "Formal practice: Daily meditation sessions starting with 5-10 minutes",
        "Informal practice: Bringing mindful awareness to daily activities",
        "Body scan: Systematic attention to different body regions",
        "Breathing meditation: Focusing on the sensation of breath",
        "Mindful movement: Combining mindfulness with physical activities like yoga or walking",
        "Apps and guided practices: Using technology to support practice development"
      ]
    }
  }
];

export default function KnowledgeHub() {
  const [active, setActive] = useState(null);
  const [activeSection, setActiveSection] = useState("fitness");

  // Get all sections data
  const sections = {
    fitness: {
      title: "Fitness Science",
      data: fitnessScience
    },
    nutrition: {
      title: "Nutrition Science",
      data: nutritionScience
    },
    psychology: {
      title: "Psychology & Discipline",
      data: psychologyDiscipline
    },
    body: {
      title: "Body Mechanisms",
      data: bodyMechanisms
    },
    myths: {
      title: "Myths vs Facts",
      data: mythsVsFacts
    },
    supplements: {
      title: "Supplements Education",
      data: supplementsEducation
    },
    beginner: {
      title: "Beginner Guides",
      data: beginnerGuides
    },
    advanced: {
      title: "Advanced Guides",
      data: advancedGuides
    },
    mental: {
      title: "Mental Education",
      data: mentalEducation
    }
  };

  return (
    <div className="knowledge-hub">
      <h1 className="title">🧠 Knowledge Hub</h1>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            className={`nav-tab ${activeSection === key ? "active" : ""}`}
            onClick={() => setActiveSection(key)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="section">
        <h2 className="section-title">{sections[activeSection].title}</h2>
        <div className="grid">
          {sections[activeSection].data.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => setActive(item)}
            >
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div className="modal">
          <div className="modal-box">
            <h2>{active.title}</h2>
            <p>{active.description}</p>
            
            {/* Render different content based on the data structure */}
            {active.content && (
              <>
                {active.content.explanation && (
                  <div className="content-section">
                    <h3>Explanation</h3>
                    <p>{active.content.explanation}</p>
                  </div>
                )}
                
                {active.content.howItWorks && (
                  <div className="content-section">
                    <h3>How It Works</h3>
                    <ul>
                      {active.content.howItWorks.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {active.content.benefits && (
                  <div className="content-section">
                    <h3>Benefits</h3>
                    <ul>
                      {active.content.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {active.content.application && (
                  <div className="content-section">
                    <h3>Practical Application</h3>
                    <ul>
                      {active.content.application.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {active.content.myth && (
                  <div className="content-section">
                    <h3>Myth</h3>
                    <p>{active.content.myth}</p>
                  </div>
                )}
                
                {active.content.fact && (
                  <div className="content-section">
                    <h3>Fact</h3>
                    <p>{active.content.fact}</p>
                  </div>
                )}
                
                {active.content.types && (
                  <div className="content-section">
                    <h3>Types</h3>
                    <ul>
                      {active.content.types.map((type, index) => (
                        <li key={index}>{type}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {active.content.provenBenefits && (
                  <div className="content-section">
                    <h3>Proven Benefits</h3>
                    <ul>
                      {active.content.provenBenefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {active.content.whoBenefitsMost && (
                  <div className="content-section">
                    <h3>Who Benefits Most</h3>
                    <ul>
                      {active.content.whoBenefitsMost.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {active.content.practicalTakeaway && (
                  <div className="content-section">
                    <h3>Practical Takeaway</h3>
                    <p>{active.content.practicalTakeaway}</p>
                  </div>
                )}
                
                {/* Add more content sections as needed */}
              </>
            )}
            
            <button onClick={() => setActive(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}