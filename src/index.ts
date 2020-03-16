/**
 * 复制到剪切板
 * @param text 要复制的内容
 * @example copy2clipboard(text);
 */
export default function copy2clipboard(text: string) {
	return new Promise<void>((resolve, reject) => {
		const textArea = document.createElement('textarea');
		textArea.setAttribute('style', JSON.stringify({
			background: 'transparent',
			border: 'none',
			boxShadow: 'none',
			height: '2em',
			left: 0,
			outline: 'none',
			padding: 0,
			position: 'fixed',
			top: 0,
			width: '2em'
		}));

		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.select();

		try {
			const successful = document.execCommand('copy');
			if (!successful) {
				reject(new Error('copy command unavailable'));
			} else {
				resolve();
			}
		} finally {
			document.body.removeChild(textArea);
		}
	});
}
