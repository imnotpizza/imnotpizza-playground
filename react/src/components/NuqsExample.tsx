import React, { useEffect } from 'react';
import {
  useQueryState,
  parseAsInteger,
  parseAsStringEnum,
  parseAsIsoDateTime,
  parseAsIsoDate,
} from 'nuqs';

/**
 * nuqs 예제
 * query string 관련 상태 추상화
 */
export default function NuqsExample() {
  /**
   * useState와 동일, 현재 query string의 name 값을 가져옴
   */
  const [name, setName] = useQueryState('name');
  useEffect(() => {
    /**
     * url 내 query string에 대한 값
     * /?name= : ''
     * / : null
     * /?name=foo : 'foo'
     */
    console.log('>>>> query params', name);
  });
  return (
    <>
      <input value={name || ''} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || 'anonymous visitor'}!</p>
    </>
  );
}

/**
 * 쿼리 스트링 int로 받아옴
 * 파싱된 쿼리스트링은 무조건 string으로 들어오나, parseAsInteger을 통해 number타입으로 변환
 */
export const NuqsExampleWithInteger = () => {
  const [count, setCount] = useQueryState('count', parseAsInteger);

  useEffect(() => {
    console.log('>>>> count', count);
  }, [count]);
  return (
    <>
      <pre>count: {count}</pre>
      <button onClick={() => setCount(0)}>Reset</button>
      {/* handling null values in setCount is annoying: */}
      <button onClick={() => setCount((c) => (c ?? 0) + 1)}>+</button>
      <button onClick={() => setCount((c) => (c ?? 0) - 1)}>-</button>
      <button onClick={() => setCount(null)}>Clear</button>
    </>
  );
};

enum Fruit {
  Apple = 'apple',
  Banana = 'banana',
  Cherry = 'cherry',
}

/**
 * 일반 form 예제
 */
export const NuqsExampleWithMultipleParams = () => {
  // string
  const [keyword, setKeyword] = useQueryState('keyword');
  // number
  const [page, setPage] = useQueryState('page', parseAsInteger);
  // enum
  const [fruit, setFruit] = useQueryState(
    'fruit',
    parseAsStringEnum<Fruit>(Object.values(Fruit)),
  );
  // date+time
  const [startDate, setStartDate] = useQueryState(
    'startDate',
    parseAsIsoDateTime,
  );
  // date
  const [endDate, setEndDate] = useQueryState('endDate', parseAsIsoDate);

  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      {/* Keyword Input */}
      <div className="flex flex-col">
        <label className="text-sm font-medium">Keyword</label>
        <input
          type="text"
          value={keyword || ''}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {/* Page Number Input */}
      <div className="flex flex-col">
        <label className="text-sm font-medium">Page</label>
        <input
          type="number"
          value={page || ''}
          onChange={(e) => setPage(Number(e.target.value))}
        />
      </div>

      {/* Fruit Selection (Radio Buttons) */}
      <div className="flex flex-col">
        <label className="text-sm font-medium">Select a fruit</label>
        <div className="flex gap-2">
          {Object.values(Fruit).map((f) => (
            <label key={f} className="flex items-center gap-1">
              <input
                type="radio"
                value={f}
                checked={fruit === f}
                onChange={() => setFruit(f)}
                className="accent-blue-500"
              />
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Start Date Picker */}
      <div className="flex flex-col">
        <label className="text-sm font-medium">Start Date</label>
        <input
          type="date"
          value={startDate ? startDate.toISOString().split('T')[0] : ''}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
      </div>

      {/* End Date Picker */}
      <div className="flex flex-col">
        <label className="text-sm font-medium">End Date</label>
        <input
          type="date"
          value={endDate ? endDate.toISOString().split('T')[0] : ''}
          onChange={(e) => setEndDate(new Date(e.target.value))}
        />
      </div>
    </div>
  );
};

const FormStatus = () => {
  
}