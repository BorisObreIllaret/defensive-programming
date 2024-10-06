# Project context

## Dependencies
This project is made with:
- Vite 5.4
- TypeScript 5.5
- React 18.3
- Tailwind CSS 3.4
- Daisy UI 4.12

## File naming
All files are named using `kebab-case` convention:
- lower case
- `-` (dash) as separator
- no accent

A file name is made of 3 parts, separated by a `.` (dot):
- the file name itself, ie: `card-header`;
- the file type, ie: `component`;
- the file extension, ie: `tsx`.

Following the previous example, the file name is: `card-header.component.tsx`.

## React components
A React component follows these rules:
- props are `type` (not `interface`);
- component is an arrow function declared as `const`;
- component inherits from `FC`;
- component is exported between `{}` at the end of the file.

Applying the previous rules, a component should be like:
```tsx
import {type FC} from "react";

type Props = {
	title: string,
	withCloseButton?: boolean,
}

const CardHeader: FC<Props> = ({title, withCloseButton = true}) => {
	/... component code
	return (<div>
		{title}
	</div>);
}

export {CardHeader};
```

## Linting
ESLint rules:
- no space between `[]` and `{}`;
- ident is `tab`;
- line breaking style is `CRLF` (Windows);
- quotes are `"` (double quote);
- template literals are accepted;
- semicolon is mandatory;
- custom classes (not Tailwind's ones) are allowed.