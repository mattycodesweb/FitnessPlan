 v vconst planData = {
  1: {
    title: 'Week 1 — Learn the basics',
    focus: 'Keep effort moderate, focus on form, and stay consistent.',
    schedule: [
      {
        day: 'Monday',
        title: 'Full Body A',
        details: ['Goblet squat 2 x 10', 'Incline push-ups 2 x 8', 'Dumbbell row 2 x 10', 'Glute bridge 2 x 12', 'Plank 2 x 20 sec']
      },
      {
        day: 'Wednesday',
        title: 'Full Body B',
        details: ['Step-ups 2 x 8 each leg', 'Wall push-ups or bench press 2 x 10', 'Band pull-aparts 2 x 12', 'Dead bug 2 x 8 each side', 'Bird dog 2 x 8 each side']
      },
      {
        day: 'Friday',
        title: 'Cardio + Core',
        details: ['20-minute brisk walk', '10-minute easy bike or march in place', 'Side plank 2 x 15 sec each side']
      },
      {
        day: 'Weekend',
        title: 'Recovery',
        details: ['Easy walk 20 minutes', 'Stretch for 10 minutes', 'Keep meals simple and protein-focused']
      }
    ],
    nutrition: ['Aim for 180–190 g protein daily.', 'Keep carbs mostly around workouts.', 'Eat 2–3 servings of vegetables each day.']
  },
  2: {
    title: 'Week 2 — Add a little volume',
    focus: 'Slightly increase reps and hold the same pace.',
    schedule: [
      {
        day: 'Monday',
        title: 'Full Body A',
        details: ['Goblet squat 3 x 10', 'Incline push-ups 3 x 8', 'Dumbbell row 3 x 10', 'Glute bridge 3 x 12', 'Plank 3 x 25 sec']
      },
      {
        day: 'Wednesday',
        title: 'Full Body B',
        details: ['Step-ups 3 x 8 each leg', 'Dumbbell floor press 3 x 10', 'Band pull-aparts 3 x 12', 'Dead bug 3 x 8 each side', 'Bird dog 3 x 8 each side']
      },
      {
        day: 'Friday',
        title: 'Cardio + Core',
        details: ['25-minute brisk walk', '10 minutes of incline treadmill or bike', 'Side plank 2 x 20 sec each side']
      },
      {
        day: 'Weekend',
        title: 'Recovery',
        details: ['Easy walk 25 minutes', 'Mobility flow 10 minutes', 'Sleep 7–8 hours']
      }
    ],
    nutrition: ['Keep protein high and avoid liquid calories.', 'Use fruit and yogurt for snacks.', 'Try a small calorie deficit if your weight is not moving.']
  },
  3: {
    title: 'Week 3 — Stay consistent',
    focus: 'Keep the routine steady and let the work compound.',
    schedule: [
      {
        day: 'Monday',
        title: 'Full Body A',
        details: ['Goblet squat 3 x 10–12', 'Incline push-ups 3 x 10', 'Dumbbell row 3 x 10', 'Glute bridge 3 x 12', 'Plank 3 x 30 sec']
      },
      {
        day: 'Wednesday',
        title: 'Full Body B',
        details: ['Step-ups 3 x 10 each leg', 'Dumbbell floor press 3 x 10', 'Band pull-aparts 3 x 12', 'Dead bug 3 x 10 each side', 'Bird dog 3 x 10 each side']
      },
      {
        day: 'Friday',
        title: 'Cardio + Core',
        details: ['30-minute brisk walk', '10 minutes of bike or marching', 'Side plank 2 x 25 sec each side']
      },
      {
        day: 'Weekend',
        title: 'Recovery',
        details: ['Easy walk 30 minutes', 'Stretch and hydrate', 'Keep meals simple and consistent']
      }
    ],
    nutrition: ['Eat mostly whole foods.', 'Add a protein shake if needed.', 'Keep your evening meals lighter and balanced.']
  },
  4: {
    title: 'Week 4 — Repeat and refine',
    focus: 'Hold the plan, improve your effort, and stay patient.',
    schedule: [
      {
        day: 'Monday',
        title: 'Full Body A',
        details: ['Goblet squat 3 x 10', 'Incline push-ups 3 x 8–10', 'Dumbbell row 3 x 10', 'Glute bridge 3 x 12', 'Plank 3 x 30 sec']
      },
      {
        day: 'Wednesday',
        title: 'Full Body B',
        details: ['Step-ups 3 x 10 each leg', 'Dumbbell floor press 3 x 10', 'Band pull-aparts 3 x 12', 'Dead bug 3 x 10 each side', 'Bird dog 3 x 10 each side']
      },
      {
        day: 'Friday',
        title: 'Cardio + Core',
        details: ['30-minute brisk walk', '12 minutes of incline treadmill or bike', 'Side plank 2 x 30 sec each side']
      },
      {
        day: 'Weekend',
        title: 'Recovery',
        details: ['Easy walk 30 minutes', 'Stretch 10 minutes', 'Reflect on your progress and repeat']
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
