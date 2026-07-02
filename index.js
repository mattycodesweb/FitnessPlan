 const planData = {
  1: {
    title: 'Week 1 — Learn the basics',
    focus: 'Keep effort moderate, focus on form, and stay consistent.',
    schedule: [
      {
        day: 'Monday',
        title: 'Chest + Triceps',
        details: ['Bench Press 4 x 6 - 8', 'Incline Dumbbell Press 3 x 8 - 10', 'Cable or Dumbbell Flyes 3 x 12 - 15', 'Rope Pushdowns 3 x 10 - 12', 'Overhead Tricep Extension 3 x 12 - 15', 'Push-up Burnout 2 sets to near failure']
      },
      {
        day: 'Tuesday',
        title: 'Back + Biceps',
        details: ['Lat Pulldown 4 x 8 - 10', 'Seated Cable Row 3 x 10', 'One-Arm Dumbbell Row 3 x 10 each side', 'Face Pulls 3 x 15', 'EZ Bar Curl 3 x 10', 'Hammer Curl 3 x 10']
      },
      {
        day: 'Wednesday',
        title: 'Legs + Core',
        details: ['Squats (or Leg Press) 4 x 8 - 10', 'Romanian Deadlift 3 x 10', 'Walking Lunges 3 x 12 each leg', 'Leg Curl 3 x 12 - 15', 'Standing Calf Raises 4 x 15', 'CORE: Plank 2 x 30 sec','Side Plank 2 x 30 sec each side', 'Russian Twists 2 x 20', 'Hanging Knee Raises 3 x 12 - 15', 'Cable Crunch 4 x 15']
      },
      {
        day: 'Thursday',
        title: 'Upper Body Hypertrophy - This day focuses on muscle growth with lighter weights and higher reps. It also gives you your chest, shoulders, and back a second stimulus without beating up your joints',
        details: ['Incline Dumbbell Press 3 x 10 - 12', 'Chest-Supported Row 3 x 10 - 12', 'Dumbbell Shoulder Press 3 x 10', 'Lateral Raises 3 x 15', 'Cable or Dumbbell Flyes 2 x 15', 'Straight Arm Pulldowns 2 x 15', 'Rope Pushdowns 2 x 15', 'Dumbbell or Cable Bicep Curl 2 x 15']
      },
      {
        day: 'Friday',
        title: 'Shoulders + Arms',
        details: ['Seated Dumbbell Shoulder Press 4 x 8', 'Lateral Raises 4 x 12 - 15', 'Rear Delt Fly 3 x 15', 'Close-Grip Bench Press 3 x 8 - 10', 'Dumbbell Bicep Curl 3 x 10 - 12', 'Tricep Dips 3 x 12 - 15', 'Rope Pushdowns 3 x 12']
      },
      {
        day: 'Saturday',
        title: 'Full Body',
        details: ['Incline Dumbbell Press 3 x 10', 'Pull-ups or Lat Pulldown 3 x 10', 'Goblet Squat 3 x 12', 'Romanian Deadlift 3 x 10', 'Plank 2 x 30 sec', 'Side Plank 2 x 30 sec each side', 'FINISH WITH: 30 minute walk or jog']
      },
      {
        day: 'Sunday',
        title: 'Recovery',
        details: ['Rest completely']
      },
    ],
    nutrition: ['Aim for 180–190 g protein daily.', 'Keep carbs mostly around workouts.', 'Eat 2–3 servings of vegetables each day.']
  },
  2: {
    title: 'Week 2 — Add a little volume',
    focus: 'Slightly increase reps and hold the same pace.',
    schedule: [
      {
        day: 'Monday',
        title: 'Chest + Triceps',
        details: ['Bench Press 4 x 6 - 8', 'Incline Dumbbell Press 3 x 8 - 10', 'Cable or Dumbbell Flyes 3 x 12 - 15', 'Rope Pushdowns 3 x 10 - 12', 'Overhead Tricep Extension 3 x 12 - 15', 'Push-up Burnout 2 sets to near failure']
      },
      {
        day: 'Tuesday',
        title: 'Back + Biceps',
        details: ['Lat Pulldown 4 x 8 - 10', 'Seated Cable Row 3 x 10', 'One-Arm Dumbbell Row 3 x 10 each side', 'Face Pulls 3 x 15', 'EZ Bar Curl 3 x 10', 'Hammer Curl 3 x 10']
      },
      {
        day: 'Wednesday',
        title: 'Legs + Core',
        details: ['Squats (or Leg Press) 4 x 8 - 10', 'Romanian Deadlift 3 x 10', 'Walking Lunges 3 x 12 each leg', 'Leg Curl 3 x 12 - 15', 'Standing Calf Raises 4 x 15', 'CORE: Plank 2 x 30 sec','Side Plank 2 x 30 sec each side', 'Russian Twists 2 x 20', 'Hanging Knee Raises 3 x 12 - 15', 'Cable Crunch 4 x 15']
      },
      {
        day: 'Thursday',
        title: 'Upper Body Hypertrophy - This day focuses on muscle growth with lighter weights and higher reps. It also gives you your chest, shoulders, and back a second stimulus without beating up your joints',
        details: ['Incline Dumbbell Press 3 x 10 - 12', 'Chest-Supported Row 3 x 10 - 12', 'Dumbbell Shoulder Press 3 x 10', 'Lateral Raises 3 x 15', 'Cable or Dumbbell Flyes 2 x 15', 'Straight Arm Pulldowns 2 x 15', 'Rope Pushdowns 2 x 15', 'Dumbbell or Cable Bicep Curl 2 x 15']
      },
      {
        day: 'Friday',
        title: 'Shoulders + Arms',
        details: ['Seated Dumbbell Shoulder Press 4 x 8', 'Lateral Raises 4 x 12 - 15', 'Rear Delt Fly 3 x 15', 'Close-Grip Bench Press 3 x 8 - 10', 'Dumbbell Bicep Curl 3 x 10 - 12', 'Tricep Dips 3 x 12 - 15', 'Rope Pushdowns 3 x 12']
      },
      {
        day: 'Saturday',
        title: 'Full Body',
        details: ['Incline Dumbbell Press 3 x 10', 'Pull-ups or Lat Pulldown 3 x 10', 'Goblet Squat 3 x 12', 'Romanian Deadlift 3 x 10', 'Plank 2 x 30 sec', 'Side Plank 2 x 30 sec each side', 'FINISH WITH: 30 minute walk or jog']
      },
      {
        day: 'Sunday',
        title: 'Recovery',
        details: ['Rest completely']
      },
    ],
    nutrition: ['Aim for 180–190 g protein daily.', 'Keep carbs mostly around workouts.', 'Eat 2–3 servings of vegetables each day.']
  },
  3: {
    title: 'Week 2 — Add a little volume',
    focus: 'Slightly increase reps and hold the same pace.',
    schedule: [
      {
        day: 'Monday',
        title: 'Chest + Triceps',
        details: ['Bench Press 4 x 6 - 8', 'Incline Dumbbell Press 3 x 8 - 10', 'Cable or Dumbbell Flyes 3 x 12 - 15', 'Rope Pushdowns 3 x 10 - 12', 'Overhead Tricep Extension 3 x 12 - 15', 'Push-up Burnout 2 sets to near failure']
      },
      {
        day: 'Tuesday',
        title: 'Back + Biceps',
        details: ['Lat Pulldown 4 x 8 - 10', 'Seated Cable Row 3 x 10', 'One-Arm Dumbbell Row 3 x 10 each side', 'Face Pulls 3 x 15', 'EZ Bar Curl 3 x 10', 'Hammer Curl 3 x 10']
      },
      {
        day: 'Wednesday',
        title: 'Legs + Core',
        details: ['Squats (or Leg Press) 4 x 8 - 10', 'Romanian Deadlift 3 x 10', 'Walking Lunges 3 x 12 each leg', 'Leg Curl 3 x 12 - 15', 'Standing Calf Raises 4 x 15', 'CORE: Plank 2 x 30 sec','Side Plank 2 x 30 sec each side', 'Russian Twists 2 x 20', 'Hanging Knee Raises 3 x 12 - 15', 'Cable Crunch 4 x 15']
      },
      {
        day: 'Thursday',
        title: 'Upper Body Hypertrophy - This day focuses on muscle growth with lighter weights and higher reps. It also gives you your chest, shoulders, and back a second stimulus without beating up your joints',
        details: ['Incline Dumbbell Press 3 x 10 - 12', 'Chest-Supported Row 3 x 10 - 12', 'Dumbbell Shoulder Press 3 x 10', 'Lateral Raises 3 x 15', 'Cable or Dumbbell Flyes 2 x 15', 'Straight Arm Pulldowns 2 x 15', 'Rope Pushdowns 2 x 15', 'Dumbbell or Cable Bicep Curl 2 x 15']
      },
      {
        day: 'Friday',
        title: 'Shoulders + Arms',
        details: ['Seated Dumbbell Shoulder Press 4 x 8', 'Lateral Raises 4 x 12 - 15', 'Rear Delt Fly 3 x 15', 'Close-Grip Bench Press 3 x 8 - 10', 'Dumbbell Bicep Curl 3 x 10 - 12', 'Tricep Dips 3 x 12 - 15', 'Rope Pushdowns 3 x 12']
      },
      {
        day: 'Saturday',
        title: 'Full Body',
        details: ['Incline Dumbbell Press 3 x 10', 'Pull-ups or Lat Pulldown 3 x 10', 'Goblet Squat 3 x 12', 'Romanian Deadlift 3 x 10', 'Plank 2 x 30 sec', 'Side Plank 2 x 30 sec each side', 'FINISH WITH: 30 minute walk or jog']
      },
      {
        day: 'Sunday',
        title: 'Recovery',
        details: ['Rest completely']
      }
    ],
    nutrition: ['Eat mostly whole foods.', 'Add a protein shake if needed.', 'Keep your evening meals lighter and balanced.']
  },
  4: {
    title: 'Week 2 — Add a little volume',
    focus: 'Slightly increase reps and hold the same pace.',
    schedule: [
      {
        day: 'Monday',
        title: 'Chest + Triceps',
        details: ['Bench Press 4 x 6 - 8', 'Incline Dumbbell Press 3 x 8 - 10', 'Cable or Dumbbell Flyes 3 x 12 - 15', 'Rope Pushdowns 3 x 10 - 12', 'Overhead Tricep Extension 3 x 12 - 15', 'Push-up Burnout 2 sets to near failure']
      },
      {
        day: 'Tuesday',
        title: 'Back + Biceps',
        details: ['Lat Pulldown 4 x 8 - 10', 'Seated Cable Row 3 x 10', 'One-Arm Dumbbell Row 3 x 10 each side', 'Face Pulls 3 x 15', 'EZ Bar Curl 3 x 10', 'Hammer Curl 3 x 10']
      },
      {
        day: 'Wednesday',
        title: 'Legs + Core',
        details: ['Squats (or Leg Press) 4 x 8 - 10', 'Romanian Deadlift 3 x 10', 'Walking Lunges 3 x 12 each leg', 'Leg Curl 3 x 12 - 15', 'Standing Calf Raises 4 x 15', 'CORE: Plank 2 x 30 sec','Side Plank 2 x 30 sec each side', 'Russian Twists 2 x 20', 'Hanging Knee Raises 3 x 12 - 15', 'Cable Crunch 4 x 15']
      },
      {
        day: 'Thursday',
        title: 'Upper Body Hypertrophy - This day focuses on muscle growth with lighter weights and higher reps. It also gives you your chest, shoulders, and back a second stimulus without beating up your joints',
        details: ['Incline Dumbbell Press 3 x 10 - 12', 'Chest-Supported Row 3 x 10 - 12', 'Dumbbell Shoulder Press 3 x 10', 'Lateral Raises 3 x 15', 'Cable or Dumbbell Flyes 2 x 15', 'Straight Arm Pulldowns 2 x 15', 'Rope Pushdowns 2 x 15', 'Dumbbell or Cable Bicep Curl 2 x 15']
      },
      {
        day: 'Friday',
        title: 'Shoulders + Arms',
        details: ['Seated Dumbbell Shoulder Press 4 x 8', 'Lateral Raises 4 x 12 - 15', 'Rear Delt Fly 3 x 15', 'Close-Grip Bench Press 3 x 8 - 10', 'Dumbbell Bicep Curl 3 x 10 - 12', 'Tricep Dips 3 x 12 - 15', 'Rope Pushdowns 3 x 12']
      },
      {
        day: 'Saturday',
        title: 'Full Body',
        details: ['Incline Dumbbell Press 3 x 10', 'Pull-ups or Lat Pulldown 3 x 10', 'Goblet Squat 3 x 12', 'Romanian Deadlift 3 x 10', 'Plank 2 x 30 sec', 'Side Plank 2 x 30 sec each side', 'FINISH WITH: 30 minute walk or jog']
      },
      {
        day: 'Sunday',
        title: 'Recovery',
        details: ['Rest completely']
      }
    ],
    nutrition: ['Keep the same habits for 2–4 more weeks.', 'Use a small calorie deficit if fat loss slows.', 'Aim for 8,000–10,000 steps per day when possible.']
  }
};

const weekSwitcher = document.getElementById('weekSwitcher');
const weekContent = document.getElementById('weekContent');
const checklist = document.getElementById('checklist');

function renderWeek(weekNumber) {
  const week = planData[weekNumber];

  weekSwitcher.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.week) === weekNumber);
  });

  weekContent.innerHTML = `
    <div class="week-card">
      <h3>${week.title}</h3>
      <p>${week.focus}</p>
      <ul class="schedule-list">
        ${week.schedule.map((item) => `
          <li>
            <strong>${item.day} — ${item.title}</strong><br />
            ${item.details.join(' • ')}
          </li>
        `).join('')}
      </ul>
    </div>
    <div class="week-card">
      <h3>Nutrition focus</h3>
      <ul class="schedule-list">
        ${week.nutrition.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
}

function loadChecklist() {
  const saved = JSON.parse(localStorage.getItem('leanChecklist') || '[]');
  checklist.querySelectorAll('input').forEach((input) => {
    input.checked = saved.includes(input.dataset.key);
    input.addEventListener('change', () => {
      const checked = Array.from(checklist.querySelectorAll('input:checked')).map((box) => box.dataset.key);
      localStorage.setItem('leanChecklist', JSON.stringify(checked));
    });
  });
}

function buildWeekButtons() {
  Object.keys(planData).forEach((week) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.week = week;
    button.textContent = `Week ${week}`;
    button.addEventListener('click', () => renderWeek(Number(week)));
    weekSwitcher.appendChild(button);
  });
}

buildWeekButtons();
loadChecklist();
renderWeek(1);
