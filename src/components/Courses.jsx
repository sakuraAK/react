import NewCourse from './NewCourse.jsx';

export default function Courses() {
  const courses = [];
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewCourse />
      {courses.length === 0 && (
        <p className="text-stone-800 my-4">
          This program does not have any courses yet.
        </p>
      )}
      {courses.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {courses.map((course) => (
            <li key={course.id} className="flex justify-between my-4">
              <span>{course.name}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(course.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
