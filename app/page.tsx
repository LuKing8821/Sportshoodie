"use client";

import { useMemo, useState } from "react";

const fabrics = ["棉感抓绒", "速干科技布", "再生涤纶", "羊毛混纺"];
const fits = ["经典连帽", "宽松落肩", "拉链开衫", "短款训练"];
const sizes = ["XS–XXL", "成人均码", "儿童尺码", "专属尺码表"];
const crafts = ["丝网印刷", "数码直喷", "立体刺绣", "织唛与贴标"];

export default function Home() {
  const [fabric, setFabric] = useState(fabrics[0]);
  const [fit, setFit] = useState(fits[0]);
  const [size, setSize] = useState(sizes[0]);
  const [craft, setCraft] = useState(crafts[0]);
  const [sent, setSent] = useState(false);
  const brief = useMemo(() => `${fabric} · ${fit} · ${size} · ${craft}`, [fabric, fit, size, craft]);

  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav wrap" aria-label="主导航">
          <a className="brand" href="#top"><span>V</span>VANTAWEAR</a>
          <div className="nav-links"><a href="#options">定制选项</a><a href="#process">合作流程</a><a href="#quote">获取报价</a></div>
          <a className="nav-cta" href="#quote">开始定制 <b>↗</b></a>
        </nav>
        <div className="hero-grid wrap">
          <div className="hero-copy">
            <p className="eyebrow">B2B CUSTOM ATHLETIC APPAREL</p>
            <h1>让团队的<br /><em>每一次亮相</em><br />都有主场感。</h1>
            <p className="lead">为品牌、赛事与企业团队打造高质感运动 Hoodie。从布料、版型到工艺与交付，每一个环节都由你定义。</p>
            <div className="hero-actions"><a className="button primary" href="#options">探索定制方案 <span>↓</span></a><a className="text-link" href="#quote">索取面料样卡 <span>→</span></a></div>
            <div className="proof"><div><strong>10+</strong><span>年供应链经验</span></div><div><strong>500</strong><span>件起订更灵活</span></div><div><strong>30</strong><span>国稳定交付</span></div></div>
          </div>
          <div className="hero-visual" aria-label="定制运动连帽衫展示">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hoodie"><div className="hood" /><div className="draw draw-a" /><div className="draw draw-b" /><div className="torso"><span>YOUR<br />MARK</span></div><div className="sleeve left" /><div className="sleeve right" /><div className="pocket" /></div>
            <div className="visual-tag tag-top">ATHLETIC<br /><b>ESSENTIAL</b></div><div className="visual-tag tag-bottom">01 / 04<br /><b>CUSTOM FIT</b></div>
          </div>
        </div>
        <div className="ticker"><span>TEAMWEAR</span><i>✦</i><span>EVERYDAY ATHLETICS</span><i>✦</i><span>BUILT FOR MOVEMENT</span><i>✦</i><span>TEAMWEAR</span></div>
      </section>

      <section className="intro wrap">
        <p className="eyebrow">A FULL-SERVICE CUSTOM PROGRAM</p>
        <h2>不是简单印个 Logo。<br />是把品牌穿在身上。</h2>
        <p>我们把服装工厂的制造能力、运动产品的细节标准和品牌的表达需求，整合成一套清晰、可靠的定制体验。</p>
      </section>

      <section className="options" id="options">
        <div className="wrap options-header"><div><p className="eyebrow">BUILD YOUR HOODIE</p><h2>从这里开始定义</h2></div><p>选择一个起点，剩下的交给我们的产品团队。</p></div>
        <div className="wrap option-grid">
          <OptionCard number="01" title="面料" text="手感、克重、吸湿排汗与可持续性，按使用场景选择。" active={fabric} values={fabrics} onChange={setFabric} accent="lime" />
          <OptionCard number="02" title="款式" text="从比赛日到通勤日，寻找最适合团队气质的廓形。" active={fit} values={fits} onChange={setFit} accent="coral" />
          <OptionCard number="03" title="规格" text="国际尺码、包容性尺码或专为你的用户建立尺码表。" active={size} values={sizes} onChange={setSize} accent="blue" />
          <OptionCard number="04" title="品牌工艺" text="让 Logo、号码、名字和细节，在面料上准确地呈现。" active={craft} values={crafts} onChange={setCraft} accent="purple" />
        </div>
      </section>

      <section className="feature wrap"><div className="feature-mark">V</div><div><p className="eyebrow">YOUR PROGRAM, YOUR WAY</p><h2>一件 Hoodie，<br />成就很多种可能。</h2></div><div className="feature-list"><p><b>赛事与运动队</b>赛事周边、队服、胜利时刻</p><p><b>品牌与零售</b>联名系列、员工制服、会员礼品</p><p><b>企业与社群</b>团建装备、社群周边、活动礼遇</p></div></section>

      <section className="process" id="process"><div className="wrap"><p className="eyebrow">FROM IDEA TO DELIVERY</p><h2>清晰的每一步，<br />让交付更有把握。</h2><div className="steps"><Step n="01" title="提交需求" text="告诉我们数量、时间和想法。" /><Step n="02" title="方案与打样" text="产品顾问给出建议，确认样衣。" /><Step n="03" title="生产质检" text="全程可追踪，品质标准保持一致。" /><Step n="04" title="包装交付" text="按你的目的地和节奏发出。" /></div></div></section>

      <section className="logistics wrap"><div><p className="eyebrow">PACK & SHIP WITH CONFIDENCE</p><h2>交付的最后一公里，<br />也由你掌控。</h2></div><div className="logistic-cards"><article><span>01</span><h3>包装方案</h3><p>单件环保袋、定制吊牌、礼盒、整箱分码与零售包装。</p></article><article><span>02</span><h3>运输方式</h3><p>空运、海运、铁路与快递；支持 DDP / FOB 等贸易条款。</p></article></div></section>

      <section className="quote" id="quote"><div className="wrap quote-grid"><div><p className="eyebrow">LET’S MAKE IT REAL</p><h2>准备好做出<br /><em>属于你的系列？</em></h2><p>留下项目需求，产品专家将在 1 个工作日内联系你。</p></div><form onSubmit={(e) => { e.preventDefault(); setSent(true); }}><label>你的公司或品牌<input required placeholder="例如：Northline Athletics" /></label><label>工作邮箱<input required type="email" placeholder="name@company.com" /></label><label>本次定制方向<textarea defaultValue={brief} key={brief} rows={3} /></label><button className="button primary" type="submit">{sent ? "已收到，我们很快联系你" : "获取定制方案 →"}</button><small>提交即代表你同意我们就此项目与你联系。</small></form></div></section>
      <footer className="wrap"><a className="brand" href="#top"><span>V</span>VANTAWEAR</a><p>Custom athletic apparel for teams that move.</p><p>© 2026 Vantawear</p></footer>
    </main>
  );
}

function OptionCard({ number, title, text, active, values, onChange, accent }: {number:string; title:string; text:string; active:string; values:string[]; onChange:(value:string)=>void; accent:string}) { return <article className={`option-card ${accent}`}><span className="number">{number}</span><h3>{title}</h3><p>{text}</p><div className="choices">{values.map(value => <button className={active === value ? "selected" : ""} onClick={() => onChange(value)} key={value} type="button">{value}</button>)}</div><div className="card-selected">已选：<b>{active}</b></div></article> }
function Step({n,title,text}:{n:string;title:string;text:string}) { return <article><span>{n}</span><h3>{title}</h3><p>{text}</p></article> }
