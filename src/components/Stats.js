export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 😀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercenage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {numPercenage !== 100 ? (
        <em>
          👜 You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({numPercenage} %)
        </em>
      ) : (
        <em>You got evrything! Ready to go ✈</em>
      )}
    </footer>
  );
}
