import TimeAgo from 'javascript-time-ago';
import id from 'javascript-time-ago/locale/id';

TimeAgo.addDefaultLocale(id);
const timeAgo = new TimeAgo('id-ID');

export const dateTimeAgo = (date) => timeAgo.format(new Date(date));

export const numberFormatted = (number) => new Intl.NumberFormat('id-ID').format(number);

export const getAccessToken = () => localStorage.getItem('accessToken');

export const putAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);

export const voteTypeURL = (type) => {
    switch (type) {
    case 'up':
        return 'up-vote';
    case 'down':
        return 'down-vote';
    case 'neutral':
        return 'neutral-vote';
    default:
        return '';
    }
};

export const findMyScore = (userId, leaderboards) => {
    const myLeaderboards = leaderboards.find((leaderboard) => leaderboard.user.id === userId);
    const myScore = myLeaderboards ? myLeaderboards.score : 0;
    return myScore;
};

export const createCategoriesList = (threads = []) => {
    const categoriesList = [{
        name: 'Semua Kategori',
        code: '',
        amount: threads.length,
    }];
    threads.forEach((thread) => {
        const isExist = categoriesList.find((category) => category.code === thread.category);
        if (isExist) {
            const findIndex = categoriesList.findIndex((category) => category.code === thread.category);
            categoriesList[findIndex].amount += 1;
        } else {
            categoriesList.push({
                name: `#${thread.category}`,
                code: thread.category,
                amount: 1,
            });
        }
    });
    return categoriesList;
};

export const filtereThreadsByCategory = (threads, category) => {
    if (!category) return threads;
    return threads.filter((thread) => thread.category === category);
};
