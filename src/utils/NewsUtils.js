import { hackerNewsUrl } from "../config/config";

export async function BestStoryQty(qty = 10){
    let best = await fetch(hackerNewsUrl+'topstories.json');
    let response = await best.json();
    let mystories = [];
    mystories = response.slice(0, qty);
    return mystories;
}

export async function ItemDetails(itemid) {
    let item = await fetch(hackerNewsUrl+'item/'+itemid+'.json');
    let {time, text, title, kids, score, url } = await item.json();
    let kidsSliced = kids != undefined ? kids.slice(0, 20) : [];
    time = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time)
    return {time, text, title, kidsSliced, score, url}
}

