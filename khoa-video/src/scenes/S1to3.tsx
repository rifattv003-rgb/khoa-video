import React from 'react';
import {AbsoluteFill} from 'remotion';
import {useT, useF, win, pop, lerp, fadeIO} from '../timing';
import {Svg, Sky, GroundBand, ShopBackWall, SackPile, VanShape, Tree, IronDoor, ColdDefs, Hut} from '../bg';
import {Character, PhoneProp, StickProp, GlassProp, KeysProp, LanternProp} from '../Character';
import {Bubble, PillBadge, Stamp, Card, ClockIcon, QuestionIcon, KeyIcon, LockIcon, MilkCanIcon, PersonIcon, Vignette, Fog, Moon, Stars, Lamp, Torch, FONT, OUT} from '../ui';

/* ============ SCENE 1 : 0 – 23s ============ */
export const Scene1: React.FC = () => {
  const t = useT();
  const f = useF();
  const walk = lerp(t, 19.8, 22.8, 0, 1);
  const rx = 760 + walk * 640;
  const rubelArmL = t < 5 ? 158 : t < 19.8 ? 6 : 100;
  const swing = walk > 0 && walk < 1 ? Math.sin(f / 3) * 14 : 0;
  const stickHeld = t < 7.0;
  return (
    <AbsoluteFill>
      <Sky id="s1" stops={[[0, '#070b1c'], [0.6, '#141c3f'], [1, '#222a52']]} />
      <Stars f={f} />
      <Moon x={1620} y={170} />
      <Svg><Hut x={1380} y={760} s={1.1} /><Hut x={-80} y={760} s={0.9} /></Svg>
      <Tree x={1850} y={800} s={1.1} />
      <ShopBackWall x={420} w={700} groundY={930} />
      <GroundBand y={930} c1="#161a2b" c2="#232842" />
      {/* Soleman's tea stall (dark, closed) in the distance */}
      <Svg>
        <g transform="translate(1180,780)">
          <rect x={0} y={-160} width={200} height={160} fill="#2a2430" stroke={OUT} strokeWidth={2.5} />
          <path d="M-14,-160 L100,-230 L214,-160Z" fill="#3a2f3e" stroke={OUT} strokeWidth={2.5} />
          <rect x={20} y={-110} width={160} height={110} fill="#1a161e" />
        </g>
        {!stickHeld && <rect x={560} y={600} width={12} height={330} rx={6} fill="#8B5A2B" stroke={OUT} strokeWidth={2.5} transform="rotate(7 566 930)" />}
      </Svg>
      <Lamp x={1000} y={380} f={f} />
      <Fog f={f} y={640} />
      <Svg>
        <Character kind="soleman" x={1290} y={830} s={1.05} expr="neutral" opacity={0.55} seed={3} />
        <Character
          kind="rubel" x={rx} y={930} s={1.8}
          expr={t < 5 ? 'worried' : t < 12.8 ? 'think' : t < 19.8 ? 'think' : 'angry'}
          armL={rubelArmL + swing} armR={stickHeld ? (t > 5 ? -60 : -4) : -6 - swing}
          propL={<PhoneProp lit={t > 19.8} />}
          propR={stickHeld ? <StickProp /> : null}
          flip={false} tremble={t < 12 ? 1.2 : 0}
        />
      </Svg>
      {/* torch beam */}
      {t > 19.8 && (
        <Svg>
          <defs><linearGradient id="beam" x1="0" x2="1"><stop offset="0" stopColor="#fff6c8" stopOpacity={0.7} /><stop offset="1" stopColor="#fff6c8" stopOpacity={0} /></linearGradient></defs>
          <path d={`M${rx - 60},${520} L${rx + 600},${700} L${rx + 600},${300}Z`} fill="url(#beam)" opacity={lerp(t, 19.8, 20.6, 0, 1)} />
        </Svg>
      )}
      <Vignette strength={0.75} color="0,0,12" />
      {/* callouts */}
      {win(t, 7.8, 10.2) && (
        <>
          <div style={{position: 'absolute', left: 1180, top: 190, transform: `scale(${pop(t, 7.8)})`}}><ClockIcon size={230} t={(t - 7.8) * 0.5} /></div>
          <Stamp t={t} at={8.1} until={10.2} x={1300} y={470} text="২২ মিনিট" color="#FFB020" rot={-5} />
        </>
      )}
      {win(t, 10.2, 12.8) && (
        <div style={{position: 'absolute', left: rx - 80, top: 90, transform: `scale(${pop(t, 10.2)}) rotate(${Math.sin(f / 5) * 5}deg)`}}><QuestionIcon size={200} /></div>
      )}
      <Bubble t={t} at={12.9} until={14.8} x={1350} y={320} w={300} tx={850} ty={400}>
        <svg width={220} height={260} viewBox="-110 -290 220 300" style={{display: 'block', margin: '0 auto'}}>
          <Character kind="ma" x={0} y={0} s={0.75} talking expr="worried" propR={<LanternProp />} />
        </svg>
      </Bubble>
      <Bubble t={t} at={14.8} until={19.8} x={1350} y={300} w={720} tx={850} ty={400}>
        অন্যের ব্যাপারে <span style={{color: '#E23B3B'}}>নাক গলানো</span> আর একটা <span style={{color: '#1F8A4C'}}>প্রশ্ন করা</span> তো এক জিনিস না।
      </Bubble>
    </AbsoluteFill>
  );
};

/* ============ SCENE 2 : 23 – 40.4s ============ */
export const Scene2: React.FC = () => {
  const t = useT();
  const f = useF();
  const rise = pop(t, 32.4, 14);
  const tarpOff = lerp(t, 32.4, 33.6, 0, 1);
  const zoom = lerp(t, 36.0, 37.6, 1, 1.55) - lerp(t, 39.4, 40.4, 0, 0.1);
  const mjUp = win(t, 24.8, 31.4);
  return (
    <AbsoluteFill>
      <div style={{position: 'absolute', inset: 0, transformOrigin: '1620px 720px', transform: `scale(${zoom})`}}>
        <Sky id="s2" stops={[[0, '#04060f'], [0.7, '#0e1430'], [1, '#1a2146']]} />
        <Stars f={f} />
        <Moon x={300} y={150} r={55} />
        <Tree x={120} y={880} s={1.5} /><Tree x={1840} y={860} s={1.2} />
        <GroundBand y={880} c1="#121626" c2="#1d2340" />
        <Svg><VanShape x={140} y={900} s={1.0} /></Svg>
        <Fog f={f} y={700} o={0.25} />
        <Svg>
          <Character kind="jabbar" x={640} y={900} s={1.35} expr="neutral" armL={t > 26 ? 40 : 4} seed={5} opacity={0.9} />
          <Character kind="rubel" x={980} y={940} s={1.75} expr={t < 31 ? 'worried' : 'surprised'} armL={100} armR={-4} propL={<PhoneProp lit />} tremble={t < 31 ? 1.4 : 0} />
          <Character kind="majid" x={1300} y={940} s={1.7} flip expr={mjUp ? 'worried' : 'sad'} armL={mjUp ? 135 : 8} armR={mjUp ? -135 : -8} tremble={mjUp ? 2.2 : 0} talking={false} />
          {/* Hasna hidden under tarp until 32.4 */}
          {t >= 32.0 && <Character kind="hasna" x={1650} y={940 + (1 - rise) * 90} s={1.7} expr="sad" armL={t > 35 ? 18 : 4} opacity={Math.min(1, rise * 1.5)} seed={7} />}
          <SackPile x={1470} y={940} s={1.15} />
          {/* tarp */}
          <path d={`M${1470 + tarpOff * 380},${700} Q${1600 + tarpOff * 380},${560} ${1760 + tarpOff * 380},${700} L${1790 + tarpOff * 380},${940} L${1470 + tarpOff * 380},${940}Z`} fill="#6b6f78" stroke={OUT} strokeWidth={2.5} opacity={1 - tarpOff * 0.4} />
        </Svg>
        {/* torch beam from Rubel */}
        <Svg><defs><linearGradient id="b2" x1="0" x2="1"><stop offset="0" stopColor="#fff6c8" stopOpacity={0.5} /><stop offset="1" stopColor="#fff6c8" stopOpacity={0} /></linearGradient></defs>
          <path d={`M1080,560 L1900,380 L1900,900Z`} fill="url(#b2)" /></Svg>
        {/* milk-drop sparkle on Hasna's hand */}
        {win(t, 37.3, 40.4) && (
          <Svg><g transform={`translate(1590,${790 + Math.sin(f / 6) * 4})`}>
            {[0, 1, 2].map((i) => <circle key={i} cx={i * 22 - 20} cy={Math.sin(f / 5 + i) * 6} r={8} fill="#fff" stroke={OUT} strokeWidth={2} opacity={0.5 + 0.5 * Math.sin(f / 6 + i)} />)}
          </g></Svg>
        )}
      </div>
      <Vignette strength={0.8} color="0,0,10" />
      <PillBadge t={t} at={33.6} until={39.6} x={1650} y={150} text="খালা হাসনা" color="#4FA3F7" />
      <PillBadge t={t} at={24.8} until={29.5} x={1300} y={170} text="চাচা মজিদ" color="#FF8A3D" />
      {win(t, 29.0, 30.6) && <svg width={150} height={150} viewBox="0 0 120 120" style={{position: 'absolute', left: 1170, top: 200, transform: `scale(${pop(t, 29.0)})`}}><path d="M14,20 L56,14 L48,52 L70,60 L52,108 L20,70Z M64,16 L108,24 L92,60 L74,52Z" fill="#cfeeff" stroke={OUT} strokeWidth={4} strokeLinejoin="round" /></svg>}
    </AbsoluteFill>
  );
};

/* ============ SCENE 3 : 40.4 – 62.7s ============ */
export const Scene3: React.FC = () => {
  const t = useT();
  const f = useF();
  const open = lerp(t, 48.6, 50.0, 0, 1);
  const zoom = lerp(t, 50.0, 52.0, 1, 1.45) - lerp(t, 58.0, 60.0, 0, 0.45);
  const glassGive = t < 44 ? 1 : 0;
  const keyTime = win(t, 44.4, 48.8);
  return (
    <AbsoluteFill>
      <div style={{position: 'absolute', inset: 0, transformOrigin: '1500px 600px', transform: `scale(${zoom})`}}>
        <Sky id="s3" stops={[[0, '#05070f'], [0.7, '#0f1533'], [1, '#1c2348']]} />
        <Stars f={f} />
        <GroundBand y={900} c1="#121626" c2="#1d2340" />
        <Svg><ColdDefs /><rect x={1050} y={120} width={850} height={780} fill="#3a2f35" stroke={OUT} strokeWidth={2.5} />
          <IronDoor x={1330} y={260} w={400} h={640} open={open} /></Svg>
        {/* cold mist from open door */}
        {open > 0 && <div style={{position: 'absolute', left: 1230, top: 620, width: 600, height: 400, borderRadius: '50%', background: 'rgba(200,235,255,0.35)', filter: 'blur(50px)', opacity: open}} />}
        <Fog f={f} y={720} o={0.15} />
        <Svg>
          <Character kind="rubel" x={520} y={950} s={1.75} expr={t < 49.5 ? 'worried' : t < 55 ? 'surprised' : 'think'} armL={glassGive ? 70 : 8} propL={glassGive ? <GlassProp /> : null} tremble={t < 40.8 ? 1 : 0} />
          <Character kind="hasna" x={880} y={950} s={1.6} expr={t < 43 ? 'sad' : 'neutral'} armL={t > 42.2 && t < 44 ? 60 : 6} armR={-6} seed={7} />
          <Character kind="majid" x={1130} y={950} s={1.7} flip expr={t < 50 ? 'worried' : 'neutral'} armL={keyTime ? 75 : 8} propL={keyTime ? <KeysProp /> : null} armR={-8} />
        </Svg>
        {/* key + lock icons */}
        {keyTime && <div style={{position: 'absolute', left: 1040, top: 210, transform: `scale(${pop(t, 44.4)}) rotate(${Math.sin(f / 4) * 8}deg)`}}><KeyIcon size={180} /></div>}
        {win(t, 47.6, 50.4) && <div style={{position: 'absolute', left: 1430, top: 120, transform: `scale(${pop(t, 47.6)})`}}><LockIcon size={150} open={t > 48.6} /></div>}
      </div>
      <Torch x={1500} y={650} r={900} dark={0.5 - open * 0.45} />
      {win(t, 55.6, 57.4) && <div style={{position: 'absolute', left: 360, top: 140, transform: `scale(${pop(t, 55.6)}) rotate(${Math.sin(f / 5) * 4}deg)`}}><MilkCanIcon size={260} cross /></div>}
      {/* 40 women card + stamp */}
      <Card t={t} at={59.4} until={62.7} x={960} y={330} w={1100} bg="#FFF8E7">
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4}}>
          {Array.from({length: 40}).map((_, i) => (
            <div key={i} style={{transform: `scale(${pop(t, 59.6 + i * 0.045)})`}}><PersonIcon size={86} color={['#E58B6B', '#6AA6D6', '#9ED89E', '#E5B94D'][i % 4]} /></div>
          ))}
        </div>
      </Card>
      <Stamp t={t} at={59.5} until={62.7} x={960} y={640} text="পদ্মপাড়ার ৪০ জন মেয়ে" color="#C2410C" rot={-3} size={70} />
      <Vignette strength={0.55} color="0,0,12" />
    </AbsoluteFill>
  );
};
