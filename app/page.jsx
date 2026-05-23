
"use client";
import { useState } from "react";

export default function Home() {
  const [questions] = useState([
    {type:"blank",question:"She ____ to school every day."},
    {type:"tf",question:"The sun rises in the west."},
    {type:"mcq",question:"Choose the noun.",options:["Run","Book","Quickly","Beautiful"]},
    {type:"reorder",question:"football / yesterday / played / I"}
  ]);

  return (
    <main style={{maxWidth:900,margin:"auto",padding:20}}>
      <h1>Abdullah AI Quiz Platform</h1>
      <input type="file" accept=".pdf,image/*" />
      {questions.map((q,i)=>(
        <div key={i} style={{border:"1px solid #ddd",padding:12,borderRadius:8,marginTop:12}}>
          <h3>{q.question}</h3>
        </div>
      ))}
      <footer style={{marginTop:40}}>تم إعداده بواسطة عبدالله علي</footer>
    </main>
  );
}
