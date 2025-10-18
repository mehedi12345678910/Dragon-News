import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
      {/* --- Header Section --- */}
      <div className="flex bg-base-200 justify-between items-center px-5 pt-5">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Bookmark and Share Icons */}
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="hover:text-primary cursor-pointer transition" />
          <FaShareAlt className="hover:text-primary cursor-pointer transition" />
        </div>
      </div>

      {/* --- Title --- */}
      <div className="px-5 pt-4">
        <h2 className="card-title text-lg font-bold leading-snug text-gray-900 hover:text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* --- Thumbnail Image --- */}
      <figure className="px-5 pt-4">
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* --- News Details --- */}
      <div className="px-5 py-3 text-gray-700 text-sm leading-relaxed">
        {details.slice(0, 220)}...
        <span className="text-primary cursor-pointer font-medium hover:underline">
          {""}
          Read More
        </span>
      </div>

      {/* --- Tags --- */}
      <div className="px-5 pb-3 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="badge badge-outline border-primary text-primary text-xs px-2 py-1"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* --- Footer Section --- */}
      <div className="flex justify-between items-center border-t px-5 py-3 text-sm text-gray-600 bg-gray-50">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500 text-lg" />
          <span className="font-medium">{rating.number}</span>
          <span className="capitalize text-xs bg-yellow-100 text-yellow-700 px-2 py-[2px] rounded">
            {rating.badge}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2">
          <FaEye className="text-primary text-lg" />
          <span className="font-medium">{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
