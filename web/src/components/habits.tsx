interface HabitsProps {
   completed: number;
}

export function Habit(props: HabitsProps) {
   return (
      <div className=" bg-zinc-500 w-10 h-10 text-white rounded m-2 text-center flex justify-center items-center">
         {props.completed}
      </div>
   );
}
