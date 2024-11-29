'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function GameUI() {
  const [health, setHealth] = useState(100);
  const [score, setScore] = useState(0);
  const [isAttacking, setIsAttacking] = useState(false);
  const [message, setMessage] = useState('');
  
  // Game actions
  const handleAttack = () => {
    setIsAttacking(true);
    const damage = Math.floor(Math.random() * 20) + 10;
    const points = Math.floor(Math.random() * 50) + 10;
    
    setScore(prev => prev + points);
    setMessage(`Hit! +${points} points`);
    
    // Enemy counter-attack
    setTimeout(() => {
      const enemyDamage = Math.floor(Math.random() * 15) + 5;
      setHealth(prev => Math.max(0, prev - enemyDamage));
      setIsAttacking(false);
      setMessage(`Enemy hits back for ${enemyDamage} damage!`);
    }, 1000);
  };

  const handleDefend = () => {
    setHealth(prev => Math.min(100, prev + 20));
    setMessage('Defended! Recovered 20 HP');
  };

  const handleSpecial = () => {
    if (score >= 100) {
      setScore(prev => prev - 100);
      setHealth(100);
      setMessage('Special move! Full health restored!');
    } else {
      setMessage('Need 100 points for special move!');
    }
  };

  // Game over check
  useEffect(() => {
    if (health <= 0) {
      setMessage('Game Over! Refresh to play again.');
    }
  }, [health]);

  return (
    <main className={styles.gameContainer}>
      {/* Status Bar */}
      <div className={styles.statusBar}>
        <div className={styles.healthBar}>
          <div 
            className={styles.healthFill} 
            style={{ width: `${health}%`, backgroundColor: health < 30 ? '#ff4444' : '#44ff44' }}
          ></div>
          <span>HP: {health}</span>
        </div>
        <div className={styles.score}>Score: {score}</div>
      </div>

      {/* Game Area */}
      <div className={styles.gameArea}>
        <div className={styles.messageBox}>{message}</div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button 
          className={`${styles.actionButton} ${isAttacking ? styles.attacking : ''}`}
          onClick={handleAttack}
          disabled={health <= 0 || isAttacking}
        >
          Attack
        </button>
        <button 
          className={styles.actionButton}
          onClick={handleDefend}
          disabled={health <= 0 || health === 100}
        >
          Defend
        </button>
        <button 
          className={styles.actionButton}
          onClick={handleSpecial}
          disabled={health <= 0 || score < 100}
        >
          Special
        </button>
      </div>
    </main>
  );
}