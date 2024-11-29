'use client'

import { useState } from 'react';
import styles from './page.module.css';

export default function GameUI() {
  const [health, setHealth] = useState(100);
  const [score, setScore] = useState(0);
  
  return (
    <main className={styles.gameContainer}>
      {/* Status Bar */}
      <div className={styles.statusBar}>
        <div className={styles.healthBar}>
          <div className={styles.healthFill} style={{ width: `${health}%` }}></div>
          <span>HP: {health}</span>
        </div>
        <div className={styles.score}>Score: {score}</div>
      </div>

      {/* Game Area */}
      <div className={styles.gameArea}>
        {/* Game content will go here */}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button className={styles.actionButton}>Attack</button>
        <button className={styles.actionButton}>Defend</button>
        <button className={styles.actionButton}>Special</button>
      </div>
    </main>
  );
}