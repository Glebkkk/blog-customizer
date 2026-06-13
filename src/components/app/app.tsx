import { CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { ArticleStateType, defaultArticleState } from './../../constants/articleProps';
import { useState } from 'react';

import styles from './app.module.scss';

export const App = () => {

	const [appliedState, setAppliedState] = useState(defaultArticleState);

	const handleApply = (newState: ArticleStateType) => {
  		setAppliedState(newState);
	};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appliedState.fontFamilyOption.value,
					'--font-size': appliedState.fontSizeOption.value,
					'--font-color': appliedState.fontColor.value,
					'--container-width': appliedState.contentWidth.value,
					'--bg-color': appliedState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm appliedState={appliedState} onApply={handleApply} />
			<Article />
		</main>
	);
};
