import * as httpRequest from '~/utils/httpRequest';
export const search = async (q, type = 'less') => {
  // Gọi Api tìm kiếm
  // await lUôn nằm trước promise
  try {
    const res = await httpRequest.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
    // gọi API xong tắt loading
  } catch (error) {
    console.log(error);
  }
};
