import {prisma} from './prisma-client.js';

/**
 * Validates a device token and returns the associated deviceId.
 */
export async function validateDeviceToken(token: string): Promise<number | null> {
    const record = await prisma.deviceRegistrationToken.findUnique({
        where: { token },
        select: { deviceId: true, expiresAt: true }
    });

    if (!record || record.expiresAt < new Date()) return null;
    return record.deviceId;
}

/**
 * Saves telemetry data to the DB.
 */
export async function saveTelemetry(deviceId: number, data: any) {
    return prisma.telemetry.create({
        data: {
            deviceId,
            payload: data.payload || {},
            temperature: data.temperature,
            humidity: data.humidity,
            battery: data.battery,
        }
    });
}

/**
 * Retrieves telemetry for a specific device within a timeframe.
 */
export async function getTelemetry(deviceId: number, start: Date, end: Date) {
    return prisma.telemetry.findMany({
        where: {
            deviceId,
            ts: { gte: start, lte: end }
        },
        orderBy: { ts: 'desc' }
    });
}