import { withLayout } from '../layout/layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../../Interfaces/menu.interface';
import { API } from '../../helpers/api';

const Search = ({menu}: HomeProps) => {
  return (
    <>
	Search
    </>
  );
};

export default withLayout(Search);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}