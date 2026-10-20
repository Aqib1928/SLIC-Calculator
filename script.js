"use strict";
const rateData = {
  20: {
    "03_20": 47.73,
    "03_15": 64.44,
    "03_10": 99.04,
    "81_20": 106.03,
    PLATINUM_91: 279.48,
  },
  21: {
    "03_20": 47.77,
    "03_15": 64.47,
    "03_10": 99.07,
    "81_20": 106.07,
    PLATINUM_91: 279.51,
  },
  22: {
    "03_20": 47.82,
    "03_15": 64.51,
    "03_10": 99.1,
    "81_20": 106.14,
    PLATINUM_91: 279.55,
  },
  23: {
    "03_20": 47.87,
    "03_15": 64.55,
    "03_10": 99.13,
    "81_20": 106.2,
    PLATINUM_91: 279.58,
  },
  24: {
    "03_20": 47.93,
    "03_15": 64.59,
    "03_10": 99.16,
    "81_20": 106.28,
    PLATINUM_91: 279.61,
  },
  25: {
    "03_20": 47.99,
    "03_15": 64.63,
    "03_10": 99.2,
    "81_20": 106.35,
    PLATINUM_91: 279.67,
  },
  26: {
    "03_20": 48.05,
    "03_15": 64.68,
    "03_10": 99.24,
    "81_20": 106.41,
    PLATINUM_91: 279.69,
  },
  27: {
    "03_20": 48.13,
    "03_15": 64.74,
    "03_10": 99.28,
    "81_20": 106.51,
    PLATINUM_91: 279.75,
  },
  28: {
    "03_20": 48.22,
    "03_15": 64.8,
    "03_10": 99.32,
    "81_20": 106.62,
    PLATINUM_91: 279.79,
  },
  29: {
    "03_20": 48.31,
    "03_15": 64.87,
    "03_10": 99.37,
    "81_20": 106.72,
    PLATINUM_91: 279.84,
  },
  30: {
    "03_20": 48.42,
    "03_15": 64.95,
    "03_10": 99.43,
    "81_20": 106.85,
    PLATINUM_91: 279.91,
  },
  31: {
    "03_20": 48.54,
    "03_15": 65.03,
    "03_10": 99.49,
    "81_20": 106.99,
    PLATINUM_91: 279.98,
  },
  32: {
    "03_20": 48.67,
    "03_15": 65.13,
    "03_10": 99.56,
    "81_20": 107.13,
    PLATINUM_91: 280.05,
  },
  33: {
    "03_20": 48.83,
    "03_15": 65.24,
    "03_10": 99.64,
    "81_20": 107.32,
    PLATINUM_91: 280.14,
  },
  34: {
    "03_20": 49.0,
    "03_15": 65.36,
    "03_10": 99.72,
    "81_20": 107.5,
    PLATINUM_91: 280.21,
  },
  35: {
    "03_20": 49.2,
    "03_15": 65.5,
    "03_10": 99.82,
    "81_20": 107.73,
    PLATINUM_91: 280.33,
  },
  36: {
    "03_20": 49.43,
    "03_15": 65.65,
    "03_10": 99.93,
    "81_20": 107.99,
    PLATINUM_91: 280.44,
  },
  37: {
    "03_20": 49.69,
    "03_15": 65.84,
    "03_10": 100.06,
    "81_20": 108.28,
    PLATINUM_91: 280.59,
  },
  38: {
    "03_20": 49.99,
    "03_15": 66.04,
    "03_10": 100.2,
    "81_20": 108.61,
    PLATINUM_91: 280.73,
  },
  39: {
    "03_20": 50.32,
    "03_15": 66.28,
    "03_10": 100.36,
    "81_20": 108.97,
    PLATINUM_91: 280.89,
  },
  40: {
    "03_20": 50.71,
    "03_15": 66.54,
    "03_10": 100.55,
    "81_20": 109.41,
    PLATINUM_91: 281.1,
  },
  41: {
    "03_20": 51.14,
    "03_15": 66.85,
    "03_10": 100.76,
    "81_20": 109.87,
    PLATINUM_91: 281.31,
  },
  42: {
    "03_20": 51.63,
    "03_15": 67.21,
    "03_10": 101.0,
    "81_20": 110.41,
    PLATINUM_91: 281.58,
  },
  43: {
    "03_20": 52.17,
    "03_15": 67.61,
    "03_10": 101.28,
    "81_20": 110.98,
    PLATINUM_91: 281.87,
  },
  44: {
    "03_20": 52.79,
    "03_15": 68.07,
    "03_10": 101.61,
    "81_20": 111.66,
    PLATINUM_91: 282.2,
  },
  45: {
    "03_20": 53.47,
    "03_15": 68.59,
    "03_10": 101.97,
    "81_20": 112.38,
    PLATINUM_91: 282.58,
  },
  46: {
    "03_20": 54.23,
    "03_15": 69.18,
    "03_10": 102.4,
    "81_20": 113.2,
    PLATINUM_91: 283.01,
  },
  47: {
    "03_20": 55.07,
    "03_15": 69.84,
    "03_10": 102.88,
    "81_20": 114.1,
    PLATINUM_91: 283.52,
  },
  48: {
    "03_20": 56.0,
    "03_15": 70.58,
    "03_10": 103.44,
    "81_20": 115.1,
    PLATINUM_91: 284.07,
  },
  49: {
    "03_20": 57.02,
    "03_15": 71.41,
    "03_10": 104.07,
    "81_20": 116.19,
    PLATINUM_91: 284.72,
  },
  50: {
    "03_20": 58.13,
    "03_15": 72.32,
    "03_10": 104.77,
    "81_20": 117.37,
    PLATINUM_91: 285.44,
  },
  51: {
    "03_20": 59.35,
    "03_15": 73.32,
    "03_10": 105.57,
    "81_20": 118.68,
    PLATINUM_91: 286.28,
  },
  52: {
    "03_20": 60.66,
    "03_15": 74.41,
    "03_10": 106.44,
    "81_20": 120.07,
    PLATINUM_91: 287.18,
  },
  53: {
    "03_20": 62.09,
    "03_15": 75.59,
    "03_10": 107.39,
    "81_20": 121.59,
    PLATINUM_91: 288.18,
  },
  54: {
    "03_20": 63.62,
    "03_15": 76.86,
    "03_10": 108.43,
    "81_20": 123.19,
    PLATINUM_91: 289.27,
  },
  55: {
    "03_20": 65.27,
    "03_15": 78.23,
    "03_10": 109.54,
    "81_20": 124.9,
    PLATINUM_91: 290.43,
  },
  56: {
    "03_20": "",
    "03_15": 79.69,
    "03_10": 110.72,
    "81_20": "",
    PLATINUM_91: 291.67,
  },
  57: {
    "03_20": "",
    "03_15": 81.25,
    "03_10": 111.99,
    "81_20": "",
    PLATINUM_91: 292.98,
  },
  58: {
    "03_20": "",
    "03_15": "",
    "03_10": 113.32,
    "81_20": "",
    PLATINUM_91: 294.37,
  },
  59: {
    "03_20": "",
    "03_15": "",
    "03_10": 114.74,
    "81_20": "",
    PLATINUM_91: 295.81,
  },
  60: {
    "03_20": "",
    "03_15": "",
    "03_10": 116.25,
    "81_20": "",
    PLATINUM_91: 297.32,
  },
};
const labels = {
  "03_10": "03 / 10",
  "03_15": "03 / 15",
  "03_20": "03 / 20",
  "81_20": "81 / 20",
  PLATINUM_91: "Platinum 91 / 10",
};
const terms = {
  "03_10": 10,
  "03_15": 15,
  "03_20": 20,
  "81_20": 20,
  PLATINUM_91: 10,
};
const $ = (id) => document.getElementById(id);
const money = (n) =>
  "Rs " +
  n.toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
function ageNearestBirthday(d, now) {
  let years = now.getFullYear() - d.getFullYear();
  let last = new Date(now.getFullYear(), d.getMonth(), d.getDate());
  if (last > now) {
    years--;
    last = new Date(now.getFullYear() - 1, d.getMonth(), d.getDate());
  }
  let next = new Date(last.getFullYear() + 1, d.getMonth(), d.getDate());
  let six = new Date(last);
  six.setMonth(six.getMonth() + 6);
  return years + (now >= six && now < next ? 1 : 0);
}
function getAge() {
  if (!$("dob").value) return null;
  const p = $("dob").value.split("-").map(Number);
  const d = new Date(p[0], p[1] - 1, p[2]),
    now = new Date();
  if (
    d.getFullYear() !== p[0] ||
    d.getMonth() !== p[1] - 1 ||
    d.getDate() !== p[2] ||
    d > now
  )
    return null;
  let age = ageNearestBirthday(d, now);
  if ($("gender").value === "Female") age = Math.max(20, age - 2);
  return age;
}
function updateAge() {
  $("age").value = getAge() === null ? "" : getAge() + " Years";
}
["dob", "gender"].forEach((id) => $(id).addEventListener("change", updateAge));
const now = new Date();
$("dob").max = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, "0"),
  String(now.getDate()).padStart(2, "0"),
].join("-");
let current=null;
function clear(){current=null;$('results').hidden=true;$('empty').hidden=false;$('illustration').hidden=true;$('error').textContent='';$('pdf-status').textContent=''}
$('calculator').addEventListener('reset',()=>setTimeout(()=>{clear();updateAge()},0));
['name','dob','gender','term','sum'].forEach(id=>$(id).addEventListener('input',()=>{if(current)clear()}));
$('calculator').addEventListener('submit',e=>{
 e.preventDefault();clear();const name=$('name').value.trim(),dob=$('dob').value,gender=$('gender').value,term=$('term').value,sum=Number($('sum').value),age=getAge();
 if(!name||!dob||!gender||!term||age===null||!$('sum').value||!Number.isFinite(sum)||sum<=0||sum>1e9){$('error').textContent='Please complete all fields with valid values.';return}
 const rate=rateData[age]?.[term];if(typeof rate!=='number'||!Number.isFinite(rate)){$('error').textContent='No rate available for this age and plan. Please select another eligible plan.';return}
 const premium=(sum/1000)*rate+100;
 current={name,dob,gender,term,sum,age,rate,premium,years:terms[term]};
 $('r-age').textContent=age+' Years';$('r-term').textContent=labels[term];$('r-sum').textContent=money(sum);$('r-rate').textContent=rate.toFixed(2);$('r-premium').textContent=money(premium);$('empty').hidden=true;$('results').hidden=false;
});
function fillIllustration(){
 if(!current)return;const c=current;
 const values={'i-name':c.name,'i-date':new Date().toLocaleDateString('en-GB'),'i-dob':c.dob.split('-').reverse().join('/'),'i-age':c.age+' Years','i-gender':c.gender,'i-term':c.years+' Years','i-sum':money(c.sum),'i-premium':money(c.premium),'i-pay-years':c.years+' Years','b-sum':money(c.sum),'b-scheduled':money(c.sum),'f-premium':money(c.premium),'f-total':money(c.premium*c.years),'natural-cover':money(c.sum)+' + Bonus','accidental-cover':money(c.sum*2)+' + Bonus'};
 Object.entries(values).forEach(([id,v])=>$(id).textContent=v);
 $('i-plan').textContent=labels[c.term]+' PLAN';
 // Only the 03/20 design assumption has a supplied maturity multiplier; never invent one for other plans.
 const hasMaturity=c.term==='03_20';const maturity=hasMaturity?c.sum*5:null;
 $('b-maturity').textContent=hasMaturity?money(maturity):'Pending verification';$('f-maturity').textContent=hasMaturity?money(maturity):'Pending verification';
 $('maturity-rule').textContent=hasMaturity?'5 × Sum Assured · illustrative only':'Plan-specific formula pending';
 const body=$('payment-rows');body.replaceChildren();
 for(let start=1;start<=c.years;start+=5){const end=Math.min(start+4,c.years),period=end-start+1;const tr=document.createElement('tr');
 [start+'–'+end,money(c.premium),money(c.premium*period),money(c.sum)+' + Bonus',money(c.sum*2)+' + Bonus'].forEach(v=>{const td=document.createElement('td');td.textContent=v;tr.appendChild(td)});body.appendChild(tr)}
 const journey=$('journey');journey.replaceChildren();const milestones=[1,...Array.from({length:Math.ceil(c.years/5)},(_,i)=>Math.min((i+1)*5,c.years))];
 [...new Set(milestones)].forEach(y=>{const el=document.createElement('div');el.className='journey-step';const n=document.createElement('b');n.textContent=y;const label=document.createElement('small');label.textContent=y===c.years?'Maturity*':'Year '+y;el.append(n,label);journey.append(el)});
 const total=c.premium*c.years;const max=Math.max(total,maturity||0,1);
 $('growth-premiums').style.height=(Math.max(9,total/max*100))+'%';$('growth-maturity').style.height=(maturity?Math.max(9,maturity/max*100):9)+'%';$('growth-maturity').style.opacity=maturity?'1':'.2';
 $('illustration').hidden=false;
}
$('generate').addEventListener('click',()=>{fillIllustration();$('illustration').scrollIntoView({behavior:'smooth'})});
function printReport(){if(!current)return;fillIllustration();window.print()}
$('print-report').addEventListener('click',printReport);
function pdfFilename(){const c=current;const safe=c.name.normalize('NFKD').replace(/[^a-zA-Z0-9 ]/g,'').trim().replace(/\s+/g,'_').slice(0,60)||'Customer';const date=new Date();const stamp=[date.getDate(),date.getMonth()+1,date.getFullYear()].map((v,i)=>i===2?v:String(v).padStart(2,'0')).join('-');return `${safe}_${labels[c.term].replace(/\s*\/\s*/g,'-').replace(/\s+/g,'_')}_${stamp}.pdf`}
let busy=false;
async function createPdfBlob(){
 if(!current)throw new Error('Calculate a premium first.');fillIllustration();
 if(typeof html2pdf==='undefined')throw new Error('PDF library is unavailable. Connect to the internet and reload, or use Print → Save as PDF.');
 const el=$('pdf-report');const opts={margin:0,filename:pdfFilename(),image:{type:'jpeg',quality:.98},html2canvas:{scale:2,useCORS:true,backgroundColor:'#ffffff',scrollY:0},jsPDF:{unit:'mm',format:'a4',orientation:'portrait'},pagebreak:{mode:['css','legacy']}};
 return await html2pdf().set(opts).from(el).outputPdf('blob');
}
async function withPdf(action){if(busy)return;busy=true;const status=$('pdf-status');status.textContent='Preparing your PDF…';try{await action();status.textContent='PDF ready.'}catch(e){status.textContent=e.message||'PDF generation failed.'}finally{busy=false}}
function downloadBlob(blob,filename){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),15000)}
async function downloadPdf(){await withPdf(async()=>{const blob=await createPdfBlob();downloadBlob(blob,pdfFilename())})}
async function sharePdf(){await withPdf(async()=>{
 const blob=await createPdfBlob();const file=new File([blob],pdfFilename(),{type:'application/pdf'});
 if(navigator.share&&navigator.canShare&&navigator.canShare({files:[file]})){
   try{await navigator.share({files:[file],title:'Policy Benefit Illustration'});return}catch(e){if(e.name==='AbortError')return;}
 }
 downloadBlob(blob,pdfFilename());$('pdf-status').textContent='Direct PDF sharing is not supported in this browser. PDF downloaded instead; attach it in WhatsApp or another app.';
 })}
$('download').addEventListener('click',downloadPdf);
$('download-report').addEventListener('click',downloadPdf);
$('share-report').addEventListener('click',sharePdf);
