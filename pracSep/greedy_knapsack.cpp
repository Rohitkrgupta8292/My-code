#include <bits/stdc++.h>
using namespace std;

#define pii pair<int, int>
#define vii vector<pii>
#define rep(i, a, b) for (int i = a; i < b; i++)
#define ff first
#define ss second

bool compare(pii p1, pii p2)
{
    double v1 = (double)p1.ff / p1.ss;
    double v2 = (double)p2.ff / p2.ss;

    return v1 > v2;
}

int main()
{
    int n;
    cout << "N: ";
    cin >> n;
    vii a(n);
    rep(i, 0, n)
    {   
        cout<<"first: ";
        cin >> a[i].ff;
        cout<<"second: ";
        cin >> a[i].ss;
    }
    int w;
    cout << "weight: ";
    cin >> w;
    sort(a.begin(), a.end(), compare);

    int ans = 0;
    rep(i, 0, n)
    {
        if (w >= a[i].ss)
        {
            ans += a[i].ff;
            w -= a[i].ss;
            continue;
        }

        double vw = (double) a[i].ff/a[i].ss;
        ans += vw *w;
        w = 0;
        break;
    }
    cout<<"Total value can be knapsack: "<<ans;
    return 0;
}