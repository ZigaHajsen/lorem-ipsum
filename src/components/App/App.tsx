import React, { useState } from 'react';
import data from '../../data.json';
import {
  SectionCenter,
  Title,
  LoremForm,
  Label,
  Input,
  Button,
  Article,
  Paragraph,
} from './AppStyles';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<any>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let amount = count;

    if (count <= 0) {
      amount = 1;
    }

    if (count > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <SectionCenter>
      <Title>tired of boring lorem ipsum?</Title>
      <LoremForm onSubmit={handleSubmit}>
        <Label htmlFor='amount'>paragraphs:</Label>
        <Input
          type='number'
          name='amount'
          id='amount'
          value={count.toString()}
          onChange={(event) => setCount(parseInt(event.target.value))}
        />
        <Button type='submit'>generate</Button>
      </LoremForm>
      <Article>
        {text.map((item: string, index: number) => {
          return <Paragraph key={index}>{item}</Paragraph>;
        })}
      </Article>
    </SectionCenter>
  );
};

export default App;
