const LoadingLabs = () => {
  const loadingItems = Array.from({ length: 20 }, () => 1)
  return (
    <div className="flex animate-pulse">
      <div className="mt-2 w-full">
        <ul className="mt-5 space-y-3">
          {loadingItems.map((_, idx) => (
            <li
              key={idx}
              className="h-10 w-full rounded bg-gray-200 dark:bg-gray-700"
            ></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LoadingLabs
