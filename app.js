function showResults(score,total,details){
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  resultText.innerHTML=`<strong>${score}/${total}</strong> correct (${Math.round(score/total*100)}%)`;
  breakdown.innerHTML='';
  details.forEach((d,i)=>{
    const chosenText = d.chosen===null ? 'Not answered' : d.opts[d.chosen];
    const correctText = d.opts[d.correct];
    const row = document.createElement('div');
    row.innerHTML=`
      <div>
        <b>${i+1}. ${d.q}</b><br>
        Your answer: ${chosenText}<br>
        Correct: ${correctText}<br>
        <i>Explanation: ${d.exp || "—"}</i>
      </div>`;
    breakdown.appendChild(row);
  });
  shareLink.href=`https://twitter.com/intent/tweet?text=I scored ${score}/${total} on Political Science Quiz! ${location.href}`;
}
