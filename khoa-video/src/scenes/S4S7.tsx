import React from 'react';
import {AbsoluteFill} from 'remotion';
import {useT, useF, win, pop, lerp, fadeIO} from '../timing';
import {Card, Stamp, PillBadge, CalendarIcon, TakaIcon, PersonIcon, WarningIcon, HouseIcon, MoonIcon, LockIcon, ShushIcon, CheckIcon, ArrowRight, QuestionIcon, RickshawIcon, ShoeIcon, ScissorsIcon, CommentIcon, HeartIcon, BellIcon, Vignette, FONT, OUT} from '../ui';

const Particles: React.FC<{f: number; color: string; n?: number}> = ({f, color, n = 26}) => (
  <>
    {Array.from({length: n}).map((_, i) => (
      <div key={i} style={{position: 'absolute', left: (i * 173) % 1920, top: ((i * 331 + f * (0.4 + (i % 4) * 0.25)) % 1180) - 50, width: 8 + (i % 4) * 5, height: 8 + (i % 4) * 5, borderRadius: '50%', background: color, opacity: 0.25 + (i % 3) * 0.12}} />
    ))}
  </>
);
const Hl: React.FC<{c: string; children: React.ReactNode}> = ({c, children}) => <span style={{color: c}}>{children}</span>;

/* ============ SCENE 4 : 62.7 – 85s  (clean motion graphics) ============ */
export const Scene4: React.FC = () => {
  const t = useT();
  const f = useF();
  const arrowP = lerp(t, 71.0, 71.8, 0, 1);
  return (
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, #2b2160 0%, #171235 75%, #0c0a20 100%)'}}>
      <Particles f={f} color="#8F7BFF" />
      {/* 3 years ago */}
      <Card t={t} at={62.9} until={66.8} x={960} y={520} w={760} bg="#FFF8E7">
        <div style={{display: 'flex', alignItems: 'center', gap: 36, justifyContent: 'center'}}>
          <CalendarIcon size={200} />
          <div style={{fontSize: 110}}>৩ বছর <Hl c="#E23B3B">আগে</Hl></div>
        </div>
      </Card>
      {/* Kader */}
      {win(t, 66.0, 75.4) && (
        <div style={{position: 'absolute', left: 960, top: 90, transform: `translateX(-50%) scale(${pop(t, 66.0)})`, textAlign: 'center', opacity: fadeIO(t, 66.0, 75.4, 0.3)}}>
          <PersonIcon size={190} color="#5A3A25" hat="#222" />
        </div>
      )}
      <PillBadge t={t} at={66.3} until={75.2} x={960} y={285} text="দালাল কাদের মিয়া" color="#B23A3A" />
      {/* price cards */}
      <Card t={t} at={68.6} until={75.4} x={500} y={640} w={620} bg="#E8FFF0" border="#1F8A4C" from="left">
        <div style={{fontSize: 44, color: '#1F8A4C'}}>মেয়েদের কাছ থেকে</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20}}><TakaIcon size={110} /><span style={{fontSize: 100}}>১২০ ৳</span></div>
        <div style={{fontSize: 40, color: '#555'}}>কিলো প্রতি</div>
      </Card>
      {win(t, 71.0, 75.4) && (
        <div style={{position: 'absolute', left: 960, top: 640, transform: `translate(-50%,-50%) scale(${arrowP})`, opacity: fadeIO(t, 71.0, 75.4, 0.3)}}><ArrowRight size={190} color="#FFD84D" /></div>
      )}
      <Card t={t} at={71.5} until={75.4} x={1420} y={640} w={620} bg="#FFECEC" border="#B23A3A" from="right">
        <div style={{fontSize: 44, color: '#B23A3A'}}>বাজারে বিক্রি</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20}}><TakaIcon size={110} color="#E23B3B" /><span style={{fontSize: 100}}>৩৫০ ৳</span></div>
        <div style={{fontSize: 40, color: '#555'}}>কিলো প্রতি</div>
      </Card>
      <Stamp t={t} at={73.4} until={75.4} x={960} y={900} text="২৩০ ৳ বেশি মুনাফা" color="#F5B400" rot={-3} size={64} />

      {/* wanted to buy directly */}
      {win(t, 75.5, 76.5) && (
        <div style={{position: 'absolute', inset: 0, opacity: fadeIO(t, 75.5, 76.5, 0.25)}}>
          <div style={{position: 'absolute', left: 420, top: 360, transform: `scale(${pop(t, 75.5)})`}}><PersonIcon size={230} color="#F2F2F2" hat="#fff" /></div>
          <div style={{position: 'absolute', left: 760, top: 470}}><ArrowRight size={220} color="#7CF0A8" /></div>
          {[0, 1, 2].map((i) => <div key={i} style={{position: 'absolute', left: 1160 + i * 150, top: 380, transform: `scale(${pop(t, 75.6 + i * 0.1)})`}}><PersonIcon size={170} color={['#E58B6B', '#6AA6D6', '#9ED89E'][i]} /></div>)}
        </div>
      )}
      {/* threat */}
      <Card t={t} at={76.4} until={81.2} x={960} y={520} w={1400} bg="#2B0E12" fg="#fff" border="#E23B3B" shakeAmp={t > 76.4 && t < 78 ? 5 : 0} f={f}>
        <div style={{display: 'flex', alignItems: 'center', gap: 40}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center'}}><WarningIcon size={170} /><HouseIcon size={200} bamboo /></div>
          <div style={{fontSize: 62, lineHeight: 1.35, textAlign: 'left'}}>যে মেয়ে <Hl c="#FFD84D">অন্য কারও কাছে</Hl> বেচবে, তার ঘরের চালে কেউ আর <Hl c="#FF6B6B">বাঁশও</Hl> দেবে না।</div>
        </div>
      </Card>
      {/* list: night, lock, hush */}
      {[[81.3, <MoonIcon size={130} />, 'রাত দুটো', '#FFD84D'], [82.6, <LockIcon size={130} />, 'তালা', '#FFB020'], [83.7, <ShushIcon size={130} />, 'চুপচাপ', '#9ED89E']].map(([at, icon, label, col], i) => (
        <Card key={i} t={t} at={at as number} until={85.2} x={960} y={250 + i * 270} w={900} bg="#FFF8E7" from={i % 2 ? 'right' : 'left'}>
          <div style={{display: 'flex', alignItems: 'center', gap: 40}}>{icon as React.ReactNode}<span style={{fontSize: 96, flex: 1, textAlign: 'left'}}>{label as string}</span><CheckIcon size={90} /></div>
        </Card>
      ))}
      <Vignette strength={0.5} color="0,0,15" />
    </AbsoluteFill>
  );
};

/* ============ SCENE 7 : 144 – 170s  (CTA, clean motion graphics) ============ */
export const Scene7: React.FC = () => {
  const t = useT();
  const f = useF();
  const opts: [number, React.ReactNode, string][] = [
    [153.6, <RickshawIcon size={200} />, 'রিকশাচালক'],
    [155.5, <ShoeIcon size={200} />, 'ফুটপাতের মুচি'],
    [157.7, <ScissorsIcon size={200} />, 'মহল্লার বুড়ো দর্জি'],
  ];
  const sub = pop(t, 165.5);
  return (
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, #FFF3DA 0%, #FFD7A0 70%, #F2A76A 100%)'}}>
      <Particles f={f} color="#FFFFFF" n={22} />
      <Card t={t} at={144.3} until={152.9} x={960} y={500} w={1500} bg="#fff">
        <div style={{display: 'flex', alignItems: 'center', gap: 40}}>
          <div style={{transform: `rotate(${Math.sin(f / 8) * 6}deg)`}}><QuestionIcon size={200} /></div>
          <div style={{fontSize: 66, lineHeight: 1.4, textAlign: 'left'}}>তোমরা কি কখনো এমন কাউকে চিনেছ, যার হাতের কাজে তোমার প্রতিদিনের <Hl c="#E2620B">স্বাদ বা আরাম</Hl> লুকিয়ে আছে, অথচ তার <Hl c="#C2185B">নামটা কেউ জানে না</Hl>?</div>
        </div>
      </Card>
      {opts.map(([at, icon, label], i) => (
        <Card key={i} t={t} at={at} until={159.9} x={420 + i * 540} y={540} w={430} bg="#fff" from="bottom">
          <div style={{display: 'flex', justifyContent: 'center'}}>{icon}</div>
          <div style={{fontSize: 52, marginTop: 10}}>{label}</div>
        </Card>
      ))}
      <Card t={t} at={159.9} until={162.2} x={960} y={500} w={1100} bg="#E8F3FF" border="#2F7FD8">
        <div style={{display: 'flex', alignItems: 'center', gap: 36}}><CommentIcon size={180} /><div style={{fontSize: 74}}><Hl c="#2F7FD8">কমেন্টে</Hl> তাঁর কথা লিখে জানাও</div></div>
      </Card>
      <Card t={t} at={162.2} until={165.5} x={960} y={500} w={1300} bg="#FFECF1" border="#D81B60">
        <div style={{display: 'flex', alignItems: 'center', gap: 36}}><div style={{transform: `scale(${1 + 0.08 * Math.sin(f / 4)})`}}><HeartIcon size={190} /></div><div style={{fontSize: 70, textAlign: 'left'}}>আজ আমরা সবাই মিলে <Hl c="#D81B60">তাঁদের নামটা</Hl> মনে রাখি</div></div>
      </Card>
      {t >= 165.5 && (
        <div style={{position: 'absolute', left: 960, top: 430, transform: `translate(-50%,-50%) scale(${sub})`, textAlign: 'center'}}>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: 30, background: '#E53935', color: '#fff', fontFamily: FONT, fontWeight: 700, fontSize: 96, padding: '26px 70px', borderRadius: 100, border: `6px solid ${OUT}`, boxShadow: '0 14px 30px rgba(0,0,0,0.3)'}}>
            <div style={{transform: `rotate(${Math.sin(f / 3) * 14}deg)`}}><BellIcon size={120} /></div>সাবস্ক্রাইব
          </div>
          {t > 167.9 && <div style={{marginTop: 50, fontFamily: FONT, fontWeight: 700, fontSize: 70, color: '#7A3E00', opacity: pop(t, 167.9)}}>আবার দেখা হবে <Hl c="#C2185B">নতুন গল্পে</Hl></div>}
        </div>
      )}
      <Vignette strength={0.3} color="120,60,0" />
    </AbsoluteFill>
  );
};
