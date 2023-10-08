//Internal Lib Import

import { apiService } from '../api/apiService';

export const attendanceService = apiService.injectEndpoints({
    endpoints: (builder) => ({
        attendanceList: builder.query({
            query: (store) => ({
                url: attendance/${store},
                method: 'GET',
            }),
            transformResponse: ({ data }) => data || [],
        }),
        attendanceCreate: builder.mutation({
            query: (postBody) => ({
                url: attendance,
                method: 'POST',
                body: postBody,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const {
                        data: { data },
                    } = await queryFulfilled;
                    console.log(data);
                    dispatch(
                        apiService.util.updateQueryData('attendanceList', data.store, (draft) => {
                            draft.unshift(data);
                        })
                    );
                } catch (error) {
                    console.log(error);
                }
            },
        }),

        attendanceUpdate: builder.mutation({
            query: (postBody) => ({
                url: attendance/${postBody?._id},
                method: 'PATCH',
                body: postBody,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const {
                    data: { data },
                } = await queryFulfilled;
                const response = dispatch(
                    apiService.util.updateQueryData('attendanceList', data.store, (draft) => {
                        const findIndex = draft.findIndex((item) => item._id === data._id);
                        draft[findIndex] = data;
                    })
                );
                try {
                    await queryFulfilled;
                } catch {
                    response.undo();
                }
            },
        }),
        attendanceDelete: builder.mutation({
            query: (id) => ({
                url: attendance/${id},
                method: 'DELETE',
            }),
            async onQueryStarted(id, { queryFulfilled, dispatch }) {
                const response = dispatch(
                    apiService.util.updateQueryData('attendanceList', undefined, (draft) => {
                        draft = draft.filter((item) => item._id !== id);
                    })
                );
                try {
                    await queryFulfilled;
                } catch {
                    response.undo();
                }
            },
        }),
    }),
});
export const {
    useAttendanceListQuery,
    useAttendanceDeleteMutation,
    useAttendanceCreateMutation,
    useAttendanceUpdateMutation,
} = attendanceService;