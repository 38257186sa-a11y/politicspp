// app-set2.js — Political Science GK Quiz (Sample Paper Set-2)
// Each question: { q: "Question", opts: ["A","B","C","D"], ans: correctIndex, exp: "Explanation" }

const QUESTIONS = [
  { q: "Who supported legal theory of right by stating ‘Natural Rights are ‘Nonsense on stilts’?", 
    opts: ["Bentham", "J.S. Mill", "Harold Laski", "Robert Nozick"], ans: 0, 
    exp: "Bentham (father of Utilitarianism) rejected natural rights, calling them 'nonsense upon stilts'." },

  { q: "Which pair is Not correctly matched?", 
    opts: ["Plato- Timaeus", "Machiavelli- The Golden Ass", "Bentham- A Fragment on Government", "Lenin- Neo-colonialism, the Highest Stage of Capitalism"], ans: 3, 
    exp: "Lenin actually wrote 'Imperialism, the Highest Stage of Capitalism' (1917), not 'Neo-colonialism'." },

  { q: "Who said ‘taxation equals forced labour’?", 
    opts: ["Friedrich Hayek", "Robert Nozick", "Milton Friedman", "John Locke"], ans: 1, 
    exp: "Robert Nozick, libertarian thinker, saw taxation as a form of slavery — elaborated in 'Anarchy, State, and Utopia' (1974)." },

  { q: "Plato describes the human mind by which of his theories?", 
    opts: ["The Allegory of cave", "Theory of divided line", "Theory of Forms", "All the Above"], ans: 3, 
    exp: "All three — Allegory of Cave, Divided Line, and Theory of Forms — are Plato’s ways of describing knowledge and mind." },

  { q: "Who among the following is associated with the concept of 'Tyranny of Majority'?", 
    opts: ["J.S. Mill", "Alex de Tocqueville", "Both A and B", "Thomas Paine"], ans: 2, 
    exp: "Both J.S. Mill ('On Liberty') and Tocqueville ('Democracy in America') warned of majority tyranny over minorities." },

  { q: "Lexical priority in Rawls’ theory of Justice is?", 
    opts: ["Equality Principle over Liberty Principle", "Benefit to worst off over Fair Equality of Opportunity", "Difference principle over Equal Liberty", "Equal Liberty over the Difference principle"], ans: 3, 
    exp: "Rawls: Principles are lexically ordered — Liberty Principle has priority over Difference Principle." },

  { q: "Who gave capability approach?", 
    opts: ["Amartya Sen", "Martha Nussbaum", "Both A and B", "Gerald Cohen"], ans: 2, 
    exp: "The Capability Approach was developed by Amartya Sen and expanded by Martha Nussbaum, focusing on what people can actually achieve." },

  { q: "Which pair is Not correctly matched?", 
    opts: ["Dworkin- Equality of Resources", "Michael Walzer- Complex Equality", "John Rawls- end-state theory of Justice", "Robert Nozick- labour theory of property"], ans: 3, 
    exp: "Labour theory of property was given by John Locke, not Nozick." },

  { q: "Which of the following describes Plato’s theory of justice?", 
    opts: ["Justice is what the strong can do", "Justice benefits least-advantaged", "Justice is doing one’s own duty", "Justice is doing good to friends and harm to enemies"], ans: 2, 
    exp: "Plato: Justice is performing one’s own function/duty in society according to one’s aptitude and training." },

  { q: "Which one is incorrect as influence on Marx?", 
    opts: ["Ricardo’s labour theory of value", "Hume’s empiricism", "Hegel’s dialectics", "Feuerbach’s materialism"], ans: 1, 
    exp: "Marx was not influenced by Hume’s empiricism. Others — Ricardo, Hegel, Feuerbach — shaped his thought." },

  // ... Continue similarly for all questions up to 50

];

// --- App logic (same as your Geography quiz, with explanation support) ---

function showResults(score,total,details){
  quizScreen.classList.add('hidden');resultScreen.classList.remove('hidden');
  resultText.innerHTML=`<strong>${score}/${total}</strong> correct (${Math.round(score/total*100)}%)`;
  breakdown.innerHTML='';
  details.forEach((d,i)=>{const row=document.createElement('div');
    const chosenText=d.chosen===null?'Not answered':d.opts[d.chosen];
    const correctText=d.opts[d.correct];
    const explanation=d.exp?`<em>Explanation: ${d.exp}</em>`:'';
    row.innerHTML=`<div><b>${i+1}. ${d.q}</b><br>Your answer: ${chosenText}<br>Correct: ${correctText}<br>${explanation}</div>`;
    breakdown.appendChild(row);});
  shareLink.href=`https://twitter.com/intent/tweet?text=I scored ${score}/${total} on Political Science Quiz! ${location.href}`;
}
