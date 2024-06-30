"use client"

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Rohit",
      age: 25,
    }
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
  };
  return (
    <div>
      <h1 className="test-xl font-bold">Next.js API routes demo</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
