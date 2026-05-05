export default function CheckItem({ text }: { text: string }) {
  return (
    <div className="check-item">
      <span className="check-dot" aria-hidden="true">
        <svg viewBox="0 0 10 8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1,4 3.5,6.5 9,1" />
        </svg>
      </span>
      <span>{text}</span>
    </div>
  );
}
