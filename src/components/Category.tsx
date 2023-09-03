import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
const Category = ({ categories, selected, onClick }: Props) => {
  console.log(selected);
  console.log(categories);
  return (
    <div className="w-22 p-2">
      <h2 className="w-full text-xl text-center border-b-2 border-orange-400 pb-1 mb-5">
        카테고리
      </h2>
      <ul>
        {categories?.map((category) => (
          <li
            className={` hover:text-orange-400 ${
              category === selected && "text-orange-600 font-bold"
            }`}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
