// fetcher.js
export async function fetchJSON(url){
  try{
    const res = await fetch(url, { cache: "no-cache" });
    if(!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
    const data = await res.json();
    return data;
  }catch(err){
    console.error("Fetch error:", err);
    throw err;
  }
}
