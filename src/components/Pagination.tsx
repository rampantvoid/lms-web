const Pagination = ({
  currentPage,
  coursesPerPage,
  totalCourses,
  paginate,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex w-full justify-center">
      <ul className="flex gap-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`py-2 px-3  rounded-sm hover:cursor-pointer shadow-md text-white ${
              currentPage === number ? "bg-[#3772ff] " : "bg-black"
            } `}
            onClick={() => paginate(number)}
          >
            <p>{number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
