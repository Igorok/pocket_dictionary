import type { Alert } from '../common/dto/alert';
import { defineStore } from 'pinia';

export const useAlertsStore = defineStore('alerts', {
    state: () => {
        const alertsMap: Map<string, Alert> = new Map();
        return {
            alertsMap,
        };
    },
    getters: {
        alertsList: (state): Alert[] => {
            return [...state.alertsMap.values()];
        }
    },
    actions: {
        notify(alert: Alert) {
            this.alertsMap.set(alert.id, alert);
        },
        clean(id: string) {
            if (this.alertsMap.has(id)) {
                this.alertsMap.delete(id);
            }
        }
    }
});
