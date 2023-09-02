#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cout << "N: ";
    cin >> n;
    vector<vector<int>> v;
    for (int i = 0; i < n; i++)
    {
        int start, end;
        cout << "Start: ";
        cin >> start;
        cout << "End: ";
        cin >> end;
        v.push_back({start, end});
    }
    sort(v.begin(), v.end(), [&](vector<int> &a, vector<int> &b)
         { return a[1] < b[1]; });

    int take = 1;
    int end = v[0][1];
    for (int i = 1; i < n; i++)
    {
        if (v[i][0] >= end)
        {
            take++;
            end = v[i][1];
        }
    }
    cout << take << endl;
}