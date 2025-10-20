/* Test Setup */
import { request } from '@test-setup';

/* Dependencies */
import { translationAdapter } from '@config/di';

/* Constants */
import { httpStatus, serverMessages } from '@application/constants';

describe('Test in Up endpoint', () => {
    it('should check if the server is up', async () => {
        const resp = await request.get('/up');
        const message = translationAdapter.translate(serverMessages.HEALTH_CHECK);

        const expectedBody = { message, status: httpStatus.OK }

        expect(resp.status).toBe(httpStatus.OK);
        expect(resp.body).toEqual(expectedBody);
    });
});