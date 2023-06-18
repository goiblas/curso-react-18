export default function FavButton({ active, onToggle }) {
  return (
    <button className="icon-button" onClick={onToggle}>
        <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
        <path stroke="none" d="M0 0h24v24H0z" />
            {active ? (
                <path
                fill="currentColor"
                strokeWidth="0"
                d="M8.243 7.34l-6.38.925-.113.023a1 1 0 00-.44 1.684l4.622 4.499-1.09 6.355-.013.11a1 1 0 001.464.944l5.706-3 5.693 3 .1.046a1 1 0 001.352-1.1l-1.091-6.355 4.624-4.5.078-.085a1 1 0 00-.633-1.62l-6.38-.926-2.852-5.78a1 1 0 00-1.794 0L8.243 7.34z"
                />
            ) : (
                <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z" />
            )}
        </svg>
    </button>
  )
}