'use client'
import { useState, useEffect } from 'react'
import Header from "@/components/Header/header";
import TaskList from "@/components/TaskList/tasklist";
import NewTask from "@/components/NewTask/newtask";
import { startTask} from '../components/utils/defaultTasks'
import { Tasktype } from '@/components/utils/types';
import Footer from '@/components/Footer/footer';

export default function Home() {
  const [task, setDefaultTasks] = useState<Tasktype[] | null>(null)
  

  const addTask = (newTask: Tasktype) => {
    if(task)
    setDefaultTasks([...task, newTask])
  }

  useEffect(() => {
   setDefaultTasks([])
}, [])

  return (
    <>
      <Header />
      <NewTask updateFunction={addTask}/>
      <TaskList taskItems={task}/>
      <Footer />
    </>
  );
}
