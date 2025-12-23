/**
 * Validates a device token and returns the associated deviceId.
 */
export declare function validateDeviceToken(token: string): Promise<number | null>;
/**
 * Saves telemetry data to the DB.
 */
export declare function saveTelemetry(deviceId: number, data: any): Promise<void>;
/**
 * Retrieves telemetry for a specific device within a timeframe.
 */
export declare function getTelemetry(deviceId: number, start: Date, end: Date): Promise<{
    id: number;
    ts: Date;
    deviceId: number;
    payload: import("@prisma/client/runtime/client").JsonValue;
    temperature: number | null;
    humidity: number | null;
    battery: number | null;
}[]>;
//# sourceMappingURL=telemetry.service.d.ts.map