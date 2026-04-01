import React, { useState } from "react";
import "./Diets.css";
import nonvegImg from '../assets/nonveg.jpg';
import fatloss from '../assets/fatloss.jpg';
import muscle from '../assets/muscle.webp';
import LeanBulkPlan from '../assets/LeanBulkPlan.png';
import CuttingDiet from "../assets/CuttingDiet.webp";
import HighProteinDiet from "../assets/HighProteinDiet.avif";
import KetoDiet from "../assets/KetoDiet.jpg";
import LowCarbDiet from "../assets/LowCarbDiet.jpg";
import ShreddingDiet from "../assets/ShreddingDiet.webp";
import VegDiet from "../assets/VegDiet.png";
import VeganDiet from "../assets/VeganDiet.webp";
import JainDiet from "../assets/JainDiet.jpeg";
import GlutenFreeDiet from "../assets/GlutenFreeDiet.jpg";
import DairyFreeDiet from "../assets/DairyFreeDiet.webp";
import IntermittentFasting from "../assets/IntermittentFasting.jpg";
import OMADDiet from "../assets/OMADDiet.webp";
import CollegeStudentDiet from "../assets/CollegeStudentDiet.avif";
import OfficeWorkerDiet from "../assets/OfficeWorkerDiet.jpg";
import WorkFromHomeDiet from "../assets/WorkFromHomeDiet.jpg";
import DiabetesDiet from "../assets/DiabetesDiet.jpg";
import PCOSDiet from "../assets/PCOSDiet.jpg";
import HeartHealthyDiet from "../assets/HeartHealthyDiet.jpg";
import GutHealthDiet from "../assets/GutHealthDiet.jpg";
import ImmunityBoostDiet from "../assets/ImmunityBoostDiet.jpg";
import SkinHairDiet from "../assets/SkinHairDiet.webp";
import PreWorkoutDiet from "../assets/PreWorkoutDiet.jpg";
import PostWorkoutDiet from "../assets/PostWorkoutDiet.webp";
import AthleteDiet from "../assets/AthleteDiet.avif";
 
// Placeholder images for diets without specific images
const placeholderImg = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

const dietPlansData = [
  // BODY GOAL BASED (8)
  { id: 1, title: "Fat Loss Plan", img: fatloss, calories: "1600 kcal", meals: ["Oats", "Dal Roti", "Fruits", "Paneer"], category: "Body Goal Based" },
  { id: 2, title: "Muscle Gain Plan", img: muscle, placeholderImg, calories: "2300 kcal", meals: ["Eggs", "Chicken Rice", "PB Toast", "Shake"], category: "Body Goal Based" },
  { id: 3, title: "Lean Bulk Plan", img: LeanBulkPlan, calories: "2700 kcal", meals: ["Protein Oats", "Chicken", "Banana Shake", "Fish"], category: "Body Goal Based" },
  { id: 4, title: "Cutting Diet", img: CuttingDiet, calories: "1800 kcal", meals: ["Egg Whites", "Salad", "Soup", "Chicken"], category: "Body Goal Based" },
  { id: 5, title: "High Protein Diet", img: HighProteinDiet, calories: "2200 kcal", meals: ["Oats", "Eggs", "Yogurt", "Chicken"], category: "Body Goal Based" },
  { id: 6, title: "Keto Diet", img: KetoDiet, calories: "1700 kcal", meals: ["Eggs", "Avocado", "Cheese", "Steak"], category: "Body Goal Based" },
  { id: 7, title: "Low Carb Diet", img: LowCarbDiet, calories: "1800 kcal", meals: ["Eggs", "Chicken Salad", "Nuts", "Fish"], category: "Body Goal Based" },
  { id: 8, title: "Shredding Diet", img: ShreddingDiet, calories: "1500 kcal", meals: ["Smoothie", "Fish", "Veg", "Nuts"], category: "Body Goal Based" },

  // PREFERENCE BASED (6)
  { id: 9, title: "Veg Diet", img: VegDiet, calories: "1900 kcal", meals: ["Poha", "Dal", "Sprouts", "Paneer"], category: "Preference Based" },
  { id: 10, title: "Non Veg Diet", img: nonvegImg, calories: "2100 kcal", meals: ["Eggs", "Chicken", "Fish", "Yogurt"], category: "Preference Based" },
  { id: 11, title: "Vegan Diet", img: VeganDiet, calories: "1800 kcal", meals: ["Tofu", "Lentils", "Oats", "Fruits"], category: "Preference Based" },
  { id: 12, title: "Jain Diet", img: JainDiet, calories: "1700 kcal", meals: ["Fruits", "Dal", "Roti", "Sabzi"], category: "Preference Based" },
  { id: 13, title: "Gluten Free Diet", img: GlutenFreeDiet, calories: "1900 kcal", meals: ["Rice", "Eggs", "Fruit", "Chicken"], category: "Preference Based" },
  { id: 14, title: "Dairy Free Diet", img: DairyFreeDiet, calories: "2000 kcal", meals: ["Oats", "Chicken", "Nuts", "Veg"], category: "Preference Based" },

  // LIFESTYLE BASED (5)
  { id: 15, title: "Intermittent Fasting", img: IntermittentFasting, calories: "1800 kcal", meals: ["Brunch", "Dinner"], category: "Lifestyle Based" },
  { id: 16, title: "OMAD Diet", img: OMADDiet, calories: "2000 kcal", meals: ["One big meal"], category: "Lifestyle Based" },
  { id: 17, title: "College Student Diet", img: CollegeStudentDiet, calories: "2100 kcal", meals: ["Cereal", "Rice", "Eggs", "Sandwich"], category: "Lifestyle Based" },
  { id: 18, title: "Office Worker Diet", img: OfficeWorkerDiet, calories: "1900 kcal", meals: ["Oats", "Lunchbox", "Fruits", "Soup"], category: "Lifestyle Based" },
  { id: 19, title: "Work From Home Diet", img: WorkFromHomeDiet, calories: "2000 kcal", meals: ["Home Meals", "Snacks", "Dinner"], category: "Lifestyle Based" },

  // HEALTH FOCUSED (6)
  { id: 20, title: "Diabetes Diet", img: DiabetesDiet, calories: "1600 kcal", meals: ["Low GI", "Veg", "Nuts"], category: "Health Focused" },
  { id: 21, title: "PCOS Diet", img: PCOSDiet, calories: "1700 kcal", meals: ["Seeds", "Veg", "Protein"], category: "Health Focused" },
  { id: 22, title: "Heart Healthy Diet", img: HeartHealthyDiet, calories: "1800 kcal", meals: ["Oats", "Walnuts", "Fish"], category: "Health Focused" },
  { id: 23, title: "Gut Health Diet", img: GutHealthDiet, calories: "1900 kcal", meals: ["Yogurt", "Fiber", "Veg"], category: "Health Focused" },
  { id: 24, title: "Immunity Boost Diet", img: ImmunityBoostDiet, calories: "1800 kcal", meals: ["Fruits", "Nuts", "Soup"], category: "Health Focused" },
  { id: 25, title: "Skin & Hair Diet", img: SkinHairDiet, calories: "1700 kcal", meals: ["Seeds", "Fruits", "Protein"], category: "Health Focused" },

  // PERFORMANCE + ATHLETE (5)
  { id: 26, title: "Pre Workout Diet", img: PreWorkoutDiet, calories: "400 kcal", meals: ["Banana", "Coffee", "Dates"], category: "Performance Based" },
  { id: 27, title: "Post Workout Diet", img: PostWorkoutDiet, calories: "500 kcal", meals: ["Shake", "Eggs", "Chicken"], category: "Performance Based" },
  { id: 28, title: "Athlete Diet", img: AthleteDiet, calories: "2800 kcal", meals: ["High carb", "Protein", "Veg"], category: "Performance Based" },
];

export default function DietPlans() {
  const [activePlan, setActivePlan] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [formValues, setFormValues] = useState({
    age: '',
    gender: '',
    goal: '',
    preference: '',
    allergies: '',
    calories: ''
  });
  const [isLoadingDiet, setIsLoadingDiet] = useState(false);
  const [dietResult, setDietResult] = useState(null);
  const [dietError, setDietError] = useState('');

  // Get unique categories
  const availableCategories = ["All", ...new Set(dietPlansData.map(plan => plan.category))];

  // Filter diets based on selected category
  const filteredDietPlans = activeFilter === "All" 
    ? dietPlansData 
    : dietPlansData.filter(plan => plan.category === activeFilter);

  return (
    <div className="diet-plans-container">
      <h1 className="diet-plans-title">🔥 Premium Diet Plans</h1>

      {/* Category Filter */}
      <div className="diet-filter-container">
        <div className="diet-filter-buttons">
          {availableCategories.map(category => (
            <button
              key={category}
              className={`diet-filter-btn ${activeFilter === category ? 'active-filter' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="diet-plans-grid">
        {filteredDietPlans.map((plan) => (
          <div
            key={plan.id}
            className="diet-plan-card"
            onClick={() => setActivePlan(plan)}
          >
            <div className="diet-image-container">
              <img src={plan.img} alt={plan.title} />
            </div>
            <div className="diet-plan-overlay">
              <h2 className="diet-plan-title">{plan.title}</h2>
              <p className="diet-plan-calories">{plan.calories}</p>
              <span className="diet-category-tag">{plan.category}</span>
            </div>
          </div>
        ))}
      </div>

      {activePlan && (
        <div className="diet-modal">
          <div className="diet-modal-box">
            <h2 className="diet-modal-title">{activePlan.title}</h2>
            <p className="diet-modal-info"><b>Category:</b> {activePlan.category}</p>
            <p className="diet-modal-info"><b>Calories:</b> {activePlan.calories}</p>

            <h3 className="diet-modal-subtitle">Meal Plan:</h3>
            <ul className="diet-meal-list">
              {activePlan.meals.map((meal, i) => (
                <li key={i} className="diet-meal-item">🍽 {meal}</li>
              ))}
            </ul>

            <button className="diet-modal-close-btn" onClick={() => setActivePlan(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Simple theme-matching Custom Diet Generator (shown inline at page bottom) */}
      <section className="custom-diet-section" style={{ marginTop: 30 }}>
        <div className="custom-diet-box">
          <h2 className="custom-diet-title">Personalized Diet Plan</h2>
          <p className="custom-diet-info">Answer a few quick fields and generate a plan based on available plans on the site.</p>

          <div className="diet-modal-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <input placeholder="Age" type="number" value={formValues.age} onChange={e => setFormValues({...formValues, age: e.target.value})} />
            <select value={formValues.gender} onChange={e => setFormValues({...formValues, gender: e.target.value})}>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <select value={formValues.goal} onChange={e => setFormValues({...formValues, goal: e.target.value})}>
              <option value="">Primary Goal</option>
              <option value="fat-loss">Fat Loss</option>
              <option value="muscle-gain">Muscle Gain</option>
              <option value="maintenance">Maintenance</option>
              <option value="performance">Performance</option>
            </select>

            <select value={formValues.preference} onChange={e => setFormValues({...formValues, preference: e.target.value})}>
              <option value="">Diet Preference</option>
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Veg</option>
              <option value="vegan">Vegan</option>
              <option value="keto">Keto</option>
            </select>

            <input placeholder="Allergies (optional)" value={formValues.allergies} onChange={e => setFormValues({...formValues, allergies: e.target.value})} />
            <input placeholder="Target Calories (optional)" value={formValues.calories} onChange={e => setFormValues({...formValues, calories: e.target.value})} />
          </div>

          <div style={{ marginTop: 12 }}>
            <button className="generate-diet-btn" onClick={async () => {
              if (!formValues.age || !formValues.gender || !formValues.goal) return alert('Please fill Age, Gender and Goal');
              setDietError(''); setDietResult(null); setIsLoadingDiet(true);
              const delay = ms => new Promise(r => setTimeout(r, ms));
              const simulatedMs = Math.floor(Math.random() * 5000) + 5000; // 5-10s
              try {
                await delay(simulatedMs);
                // pick best matching plan from existing data
                let matched = null;
                if (formValues.goal === 'fat-loss') matched = dietPlansData.find(p => p.title.toLowerCase().includes('fat'));
                if (formValues.goal === 'muscle-gain') matched = dietPlansData.find(p => p.title.toLowerCase().includes('muscle'));
                if (formValues.goal === 'performance') matched = dietPlansData.find(p => p.title.toLowerCase().includes('athlete'));
                if (!matched && formValues.preference) {
                  // try to find by preference keyword
                  matched = dietPlansData.find(p => p.title.toLowerCase().includes(formValues.preference.replace('-', ' ')));
                }
                if (!matched) matched = dietPlansData[Math.floor(Math.random() * dietPlansData.length)];

                const plan = {
                  source: 'local-generated',
                  generatedAt: new Date().toISOString(),
                  user: {...formValues},
                  matchedPlan: matched,
                  schedule: { daysPerWeek: formValues.goal === 'muscle-gain' ? 5 : 4, calories: formValues.calories || matched.calories },
                  meals: matched.meals,
                  notes: [formValues.allergies ? `Avoid: ${formValues.allergies}` : 'No allergies noted', 'Follow portion guidance']
                };

                setDietResult(plan);
              } catch (e) {
                setDietError('Could not generate plan.');
              } finally {
                setIsLoadingDiet(false);
              }
            }}>Generate Plan</button>
          </div>

          <div style={{ marginTop: 14 }}>
            {isLoadingDiet && <p>Fetching diet plan from server — please wait...</p>}
            {dietError && <div className="api-error">{dietError}</div>}
            {dietResult && (
              <div>
                <div style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>
                  <strong>Source:</strong> {dietResult.source} — <strong>Generated:</strong> {dietResult.generatedAt}
                </div>
                <pre style={{ color: '#000', whiteSpace: 'pre-wrap', background: '#f6f8fa', padding: 12, borderRadius: 6, overflowX: 'auto' }}>{JSON.stringify(dietResult, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}