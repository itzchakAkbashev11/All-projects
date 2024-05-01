import React from 'react'

const Background = () => {
    const backgroundImageUrl = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fscx2.b-cdn.net%2Fgfx%2Fnews%2Fhires%2F2013%2Fstudyshowsmo.jpg&tbnid=Xobr9FIpNQ3TVM&vet=12ahUKEwj0vcWizKaEAxU6U6QEHZusA-YQMygDegQIARBX..i&imgrefurl=https%3A%2F%2Fphys.org%2Fnews%2F2013-06-money-cues-trigger-unethical-behavior.html&docid=FNbRJnvkNImLnM&w=2400&h=1800&q=money&ved=2ahUKEwj0vcWizKaEAxU6U6QEHZusA-YQMygDegQIARBX";

    return (
      <div
        className="h-96"
        style={{ backgroundImage: backgroundImageUrl }}
      >
        <h1 className="text-white text-4xl font-bold">Hello Tailwind CSS</h1>
      </div>
    );
}

export default Background

