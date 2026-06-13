import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import {
	ArticleStateType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
  appliedState: ArticleStateType;
  onApply: (newState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ appliedState, onApply }: ArticleParamsFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formState, setFormState] = useState(appliedState);

  const handleReset = () => {
	setFormState(defaultArticleState);
	onApply(defaultArticleState);
};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={(e) => {
						e.preventDefault();
						onApply(formState);
						}}>
					<h1 className={styles.title}>Задайте параметры</h1>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={(option) => setFormState({ ...formState, fontFamilyOption: option })}
					/>
					<RadioGroup
						title='Размер шрифта'
						name='font-size'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={(option) => setFormState({ ...formState, fontSizeOption: option })}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={formState.fontColor}
						onChange={(option) => setFormState({ ...formState, fontColor: option })}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={formState.backgroundColor}
						onChange={(option) => setFormState({ ...formState, backgroundColor: option })}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={formState.contentWidth}
						onChange={(option) => setFormState({ ...formState, contentWidth: option })}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' onClick={handleReset}/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
