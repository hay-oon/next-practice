import { useState, useEffect } from "react";
import styles from "./Components.module.css";

export default function ExchangeRate() {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/a009f39b6efdbdab453ba597/latest/GBP`
        );
        const data = await response.json();
        setRate(data.conversion_rates.KRW);
      } catch (error) {
        console.error("환율 정보를 가져오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRate();

    const interval = setInterval(fetchRate, 3600000); // 1 hour
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.londonInfoItem}>
      <h4>Exchange Rate</h4>
      <div className={styles.exchangeRateContainer}>
        <div className={styles.currencyBox}>
          <span className={styles.currencyAmount}>1</span>
          <span className={styles.currencyCode}>GBP</span>
        </div>
        <div className={styles.exchangeRateEquals}>=</div>
        <div className={styles.currencyBox}>
          <span className={styles.currencyAmount}>
            {rate?.toLocaleString("ko-KR", { maximumFractionDigits: 2 })}
          </span>
          <span className={styles.currencyCode}>KRW</span>
        </div>
      </div>
      <p className={styles.updateTime}>Updated every hour</p>
    </div>
  );
}
