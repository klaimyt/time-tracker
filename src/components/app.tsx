import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import MainContent from "../elements/MainContent/MainContent";
import { secondsToTime } from "../services/timeService";
import AddContentBox from "./AddContentBox/AddContentBox";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  const [modal, setModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [tasks, setTasks] = useState<Record<number, Task>>({});
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);

  useEffect(() => {
    if (!isActive) return;
    const timer = setTimeout(() => {
      updateTimer();
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Initial loading data from localStorage
  useEffect(() => {
    const tasksString = localStorage.getItem("tasks");
    if (tasksString) {
      const tasks = JSON.parse(tasksString);
      console.log(tasks)
      setTasks(tasks);
    }
  }, []);

  function addTask(text: string) {
    const id = Math.round(Math.random() * 1000000000000000);
    setTasks({
      ...tasks,
      [id]: {
        text,
        time: { sum: 0, timePeriods: [] },
        id,
      },
    });
  }

  function chooseTask(id: number) {
    if (isActive) {
      stopCountdown();
      setCurrentTaskId(id);
      startCountdown(id);
    } else {
      setCurrentTaskId(id);
    }
  }

  function getTasksArray() {
    return Object.values(tasks);
  }

  function startCountdown(taskId: number) {
    const newTimePeriod = {
      from: new Date(),
      seconds: 0,
    };
    const tasksCopy = { ...tasks };
    tasksCopy[taskId].time.timePeriods.push(newTimePeriod);
    setTasks(tasksCopy);
  }

  function stopCountdown() {
    if (currentTaskId) {
      const tasksCopy = { ...tasks };
      const lastTimeperiodIndex =
        tasksCopy[currentTaskId].time.timePeriods.length - 1;
      const lastTimeperiod =
        tasksCopy[currentTaskId].time.timePeriods[lastTimeperiodIndex];
      lastTimeperiod.to = new Date();
      lastTimeperiod.seconds =
        (lastTimeperiod.to.getTime() - lastTimeperiod.from.getTime()) / 1000;
      setTasks(tasksCopy);
    }
  }

  function updateTimer() {
    if (currentTaskId) {
      const currentTask = { ...tasks[currentTaskId] };
      currentTask.time.sum = currentTask.time.timePeriods.reduce(
        (prev, cur) => {
          if (cur.to) {
            return prev + (new Date(cur.to).getTime() - new Date(cur.from).getTime()) / 1000;
          } else {
            return prev + (new Date().getTime() - new Date(cur.from).getTime()) / 1000;
          }
        },
        0
      );
      setTasks({
        ...tasks,
        [currentTask.id]: currentTask,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  function actionHandler() {
    isActive && currentTaskId
      ? stopCountdown()
      : startCountdown(currentTaskId!);
    setIsActive(!isActive);
  }

  return (
    <div id="preact_root">
      {modal ? (
        <AddContentBox addTask={addTask} onClose={() => setModal(false)} />
      ) : null}
      <Sidebar
        actionClick={actionHandler}
        chooseTask={chooseTask}
        tasks={getTasksArray()}
        isActive={isActive}
        openModal={() => setModal(true)}
      />
      {currentTaskId && (
        <MainContent
          text={tasks[currentTaskId].text}
          time={secondsToTime(tasks[currentTaskId].time.sum)}
        />
      )}
    </div>
  );
};

export default App;
