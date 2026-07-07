COMMENT WITH GITHUB URL: https://github.com/hollidaytylero/cs81-module4b-mydataexplorer

// Weekly personal data journal
// Predictions:
// Which day had the most screen time? Weekends, Saturday and Sunday
// Best focus day? Monday
// Is more caffeine helping? No, I don't drink a lot of caffeine because I am still 15.

const weekData = [
  {
    day: "Monday",
    sleepHours: 7.5,
    screenTime: 2,
    mood: "Focused",
    caffeineIntake: 0,
    focusLevel: 8
  },
{
    day: "Tuesday",
    sleepHours: 8.5,
    screenTime: 3,
    mood: "Energized",
    caffeineIntake: 0,
    focusLevel: 7
  },
  {
    day: "Wednesday",
    sleepHours: 8,
    screenTime: 1,
    mood: "Productive",
    caffeineIntake: 1,
    focusLevel: 9
  },{
    day: "Thursday",
    sleepHours: 8,
    screenTime: 1.5,
    mood: "Good",
    caffeineIntake: 1,
    focusLevel: 7
  },
  {
    day: "Friday",
    sleepHours: 9,
    screenTime: 3,
    mood: "Excited",
    caffeineIntake: 1,
    focusLevel: 6
  },
  {
    day: "Saturday",
    sleepHours: 9,
    screenTime: 4,
    mood: "Relaxed",
    caffeineIntake: 0,
    focusLevel: 5
  },
  {
    day: "Sunday",
    sleepHours: 8.5,
    screenTime: 1.5,
    mood: "Calm",
    caffeineIntake: 0,
    focusLevel: 5
  }
];
// Returns the day with the highest screen time
function findHighestScreenTime() {
  let highestDay = weekData[0];

  for (let entry of weekData) {
    if (entry.screenTime > highestDay.screenTime) {
      highestDay = entry;
    }
  }

  return highestDay;
}
// Returns the average hours of sleep for the week
function averageSleep() {
  let totalSleep = 0;

  for (let entry of weekData) {
    totalSleep += entry.sleepHours;
  }

  return totalSleep / weekData.length;
}
// Returns the mood that appears most often
function mostFrequentMood() {
  let moodCounts = {};

  for (let entry of weekData) {
    if (moodCounts[entry.mood]) {
      moodCounts[entry.mood]++;
    } else {
      moodCounts[entry.mood] = 1;
    }
  }

  let mostCommonMood = "";
  let highestCount = 0;

  for (let mood in moodCounts) {
    if (moodCounts[mood] > highestCount) {
      highestCount = moodCounts[mood];
      mostCommonMood = mood;
    }
  }

  return mostCommonMood;
}
// Calculates average focus level for each caffeine amount
function correlateCaffeineToFocus() {
  let caffeineData = {};

  for (let entry of weekData) {
    if (!caffeineData[entry.caffeineIntake]) {
      caffeineData[entry.caffeineIntake] = {
        totalFocus: 0,
        count: 0
      };
    }

    caffeineData[entry.caffeineIntake].totalFocus += entry.focusLevel;
    caffeineData[entry.caffeineIntake].count++;
  }

  for (let cups in caffeineData) {
    let averageFocus =
      caffeineData[cups].totalFocus / caffeineData[cups].count;

    console.log(
      `${cups} cup(s) of caffeine: Average Focus = ${averageFocus.toFixed(2)}`
    );
